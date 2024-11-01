const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; // Use dynamic port for Vercel

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, phone, package, message } = req.body;

    // Simple form validation
    if (!name || !email) {
        return res.status(400).send('Name and email are required.');
    }

    // Handle the data (e.g., log it, save it to a database, send an email)
    console.log('Form Submission:', { name, email, phone, package, message });

    // Send a response back to the client
    res.send('Thank you for your submission!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
