const cors = require('cors');
const bodyParser = require('body-parser');

// Enable CORS for this function
const handler = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins

    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end(); // CORS preflight response
    }

    if (req.method === 'POST') {
        const { name, email, phone, package, message } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required.' });
        }

        console.log('Form Submission:', { name, email, phone, package, message });

        return res.status(200).json({ message: 'Thank you for your submission!' });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
};

module.exports = handler;
