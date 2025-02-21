const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config({ path: "./server/.env" });

const app = express();
const PORT = 5001;

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const dbUrl = process.env.DB_URL;

// Postgres Database Connection
const pool = new Pool({
  connectionString: dbUrl,
});

//Test Database Connection;
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to Database:", res.rows[0].now);
  }
});

//Middleware
app.use(bodyParser.json());
app.use(cors());

// NodeMailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

// Route to handle form submissions
app.post("/api/contact", (req, res) => {
  const { fullName, address, email, phone, serviceType, message } = req.body;

  // Nodemailer email options
  const mailOptions = {
    from: emailUser, // Sender's email (from the form)
    to: emailUser, // Replace with your recipient email address
    subject: `New Form Submission: ${fullName} - ${serviceType}`,
    text: `
            You have a new contact form submission:
            Name: ${fullName}
            Address: ${address}
            Email: ${email}
            Phone: ${phone}
            Service Type: ${serviceType}
            Message: ${message}
        `,
    headers: {
      "X-ReplyTo": "Francisco - Info",
    },
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res
        .status(200)
        .json({ message: "Form submission received and email sent!" });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
