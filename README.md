# AIDocFinder
AIDocFinder is an AI-powered web platform designed to help users find and book appointments with healthcare professionals. The platform leverages modern web technologies and AI to provide a seamless experience, featuring an intelligent chatbot, doctor search functionality, secure user authentication, and profile management.

# Features

AI Chatbot: Built using the OpenAI API with Node.js, the chatbot assists users in finding doctors based on their specific needs.
Doctor Search: Users can search for doctors by specialty, location, and availability.
Appointment Booking: Book appointments with healthcare providers through a user-friendly interface.
User Authentication: Secure login and registration using JWT tokens, implemented with Java, Maven, and Spring Boot.
User Profile Management: Manage profiles, including medical preferences and appointment history, using Java, Maven, and Spring Boot.
Responsive Front-End: Developed using React with JavaScript to ensure a smooth user experience across devices.
Database: MySQL is used for storing user information, appointments, and other data.

# Technologies Used

Back-End (Login/Register & Profile): Java, Maven, Spring Boot (with JWT Token Authentication)
AI Chatbot: Node.js with OpenAI API
Front-End: React with JavaScript
Database: MySQL

# Installation and Setup

Prerequisites

Java (JDK 11 or later)
Node.js (v14.x or later)
Maven (latest version)
npm (comes with Node.js)
React (development environment setup)
MySQL (for database setup)

# Backend Setup

Navigate to the backend directory:

cd AIDocFinder/Project/backend/docwebsite-backend

Set up MySQL:

Create a MySQL database.
Update the application.properties file with your MySQL configuration (database name, username, password, ...).

Install Maven dependencies and run the Spring Boot application:

mvn install
mvn spring-boot:run

Frontend Setup:

Navigate to the frontend directory:

cd AIDocFinder/Project/frontend

Install the required dependencies:

npm install

Start the React development server:

npm start

AI Chatbot and User Profile Setup

Navigate to the Chatbot directory:

cd AIDocFinder/chatbot

Install dependencies:

npm install

Set up OpenAI API credentials by adding your API key to an .env file:

OPENAI_API_KEY=your-api-key-here

Start the Node.js server:

node index.js

# Usage

Once everything is set up and running, you can access the platform by navigating to http://localhost:3000 in your browser.
Users can register and log in, search for doctors, interact with the AI chatbot, and book appointments directly through the platform.



