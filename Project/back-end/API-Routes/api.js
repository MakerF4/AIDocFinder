const express = require('express');
const axios = require('axios');
const { Configuration, OpenAIApi } = require('openai');
const mysql = require("mysql2");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

const NEWS_API_KEY = process.env.NEWS_API;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

// Establish a connection to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Database connected successfully");
});

const openai = new OpenAIApi(configuration);

// Function to send email
const sendSubscriptionEmail = async (email) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD, 
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Newsletter Subscription",
    html: `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
          }

          .header {
            background-color: #28a745;
            color: #ffffff;
            padding: 20px;
            text-align: center;
          }

          .content {
            padding: 20px;
          }

          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #222831;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
          }

          .footer {
            background-color: #28a745;
            color: #ffffff;
            text-align: center;
            padding: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Newsletter Subscription</h1>
          </div>
          <div class="content">
            <p>Dear Subscriber,</p>
            <p>Thank you for subscribing to our newsletter! Stay up to date with the latest medical news and updates.</p>
            <b><p><a href="http://localhost:3000" class="button">Visit our website</a></p></b>
          </div>
          <div class="footer">
            <p>Copyright &copy; ${new Date().getFullYear()} DOC</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Function to verify email connection
const verifyEmailConnection = () => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD, 
    },
  });

  transporter.verify(function(error, success) {
    if (error) {
      console.error("Email service connection failed:", error);
    } else {
      console.log("Email service is connected");
    }
  });
};

// Call the verification function
verifyEmailConnection();

/* ----------------------------------------------------------- API ROUTES ----------------------------------------------------------- */

// News API route
router.get('/news', (req, res) => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=${NEWS_API_KEY}`)
        .then(response => {
        res.send(response.data.articles);
        })
        .catch(error => {
        console.log(error);
        });
      });

// OpenAI API route
router.post('/ask', async (req, res) => {
    try {
        const prompt = req.body.message;
        
        const response = await openai.createChatCompletion({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "You are an online medical assistant responsible for helping patients diagnose and treat illnesses. Provide brief responses, limited to 2-3 sentences, focusing on either a diagnosis, a treatment, or a request for additional symptoms. Avoid answering questions unrelated to the medical field, and explain the reasons for not addressing them.",
            },
            { role: "user", content: prompt },
          ],
        });

        // Sending the response back to the client
        res.send({ message: response.data.choices[0].message.content });
    } catch (error) {
        console.error("Error communicating with OpenAI:", error);
        res.status(500).send("An error occurred while processing your request.");
    }
});

// Subscribe route
router.post("/subscribe", (req, res) => {
  const { email } = req.body;
  const queryCheck = "SELECT * FROM subscribers WHERE email = ?";

  connection.query(queryCheck, [email], async (error, results) => {
    if (error) {
      console.error("Error in query:", error);
      return res.status(500).send("Error processing request");
    }

    if (results.length > 0) {
      return res.status(400).send({ message: "Email already subscribed" });
    }

    const queryInsert = "INSERT INTO subscribers (email) VALUES (?)";
    connection.query(queryInsert, [email], async (error, results) => {
      if (error) {
        console.error("Error in query:", error);
        return res.status(500).send("Error saving email");
      }

      // Send subscription email
      await sendSubscriptionEmail(email);

      res.send({ message: "Email saved successfully", id: results.insertId });
    });
  });
});

// Fetch doctors route
router.get("/fetch-doctors", (req, res) => {
  const { searchTerm } = req.query;
  let query = "SELECT * FROM doctors";

  if (searchTerm) {
    query += ` WHERE name LIKE '%${searchTerm}%' OR specialty LIKE '%${searchTerm}%'`;
  }

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching doctors: ", err);
      res.status(500).json({ error: "Error fetching doctors" });
      return;
    }
    res.json(results);
  });
});

module.exports = router;