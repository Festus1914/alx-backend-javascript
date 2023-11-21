const express = require('express');
const app = express();

const port = 1245;

// Define the route for the endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    <body>
      <pre>Cannot GET ${req.url}</pre>
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app variable
module.exports = app;
