const express = require('express');
const axios = require('axios');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

// Proxy route to fetch and modify the external content
app.get('/proxy', async (req, res) => {
    const externalUrl = 'https://criccoder.pages.dev/Astro2';

    try {
        // Fetch the external content using axios
        const response = await axios.get(externalUrl);
        let content = response.data;

        // Use a regular expression to remove 'alert' and 'confirm' functions
        content = content.replace(/alert\(.*?\);/g, '');
        content = content.replace(/confirm\(.*?\);/g, '');

        // Send the modified content back to the client
        res.send(content);
    } catch (error) {
        res.status(500).send('Error fetching the external content');
    }
});

// Serve the embedded webpage at "/"
app.get('/', (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Cricket Stream</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
                    iframe {
                        width: 100%;
                        height: 100vh;
                        border: none;
                    }
                </style>
            </head>
            <body>
                <iframe src="/proxy" title="Cricket Stream"></iframe>
            </body>
        </html>
    `;

    res.send(htmlContent);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
