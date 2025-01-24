const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5001;

//Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle form submissions
app.post('/api/contact', (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    // Log the submitted data
    console.log('Form submission received:');
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);

    res.status(200).json({ message: 'Form submission received successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});