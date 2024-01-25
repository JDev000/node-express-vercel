import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the 'path' module
import path from 'path';

// Define the path to your HTML file
const htmlPath = path.join(__dirname, 'index.html');

app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(htmlPath);
});

app.listen(5000, () => {
    console.log('App is running on http://localhost:5000');
});

