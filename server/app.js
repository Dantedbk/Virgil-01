const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Define API routes
const apiRouter = require('./api/routes');
app.use('/api', apiRouter);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
