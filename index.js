const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Serve static files (like HTML) from the root directory
app.use(express.static(path.join(__dirname)));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Dynamic route to serve other pages
app.get('/:page', (req, res) => {
    const filePath = path.join(__dirname, `${req.params.page}.html`);

    // Check if the requested file exists
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).sendFile(path.join(__dirname, '404.html'));
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
