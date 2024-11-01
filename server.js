// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve your HTML file (for testing locally)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, phone, package, message } = req.body;

    // Simple form validation (can be expanded as needed)
    if (!name || !email) {
        return res.status(400).send('Name and email are required.');
    }

    // Handle the data (e.g., save it to a database or send an email)
    console.log('Form Submission:', { name, email, phone, package, message });

    // Send a response back to the client
    res.send('Thank you for your submission!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
