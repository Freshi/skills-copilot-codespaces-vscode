// Create an express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// Use body parser to parse JSON body
app.use(bodyParser.json());

// Create a route for the app
app.post('/comments', (req, res) => {
  // Create a comment
  console.log(req.body);
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
