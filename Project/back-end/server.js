const express = require("express");
const apiRoutes = require("./API-Routes/api");
const cors = require("cors");
const openai = require("openai"); 
require("dotenv").config();

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", apiRoutes); 

// Configure OpenAI
openai.apiKey = process.env.OPENAI_API_KEY;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});