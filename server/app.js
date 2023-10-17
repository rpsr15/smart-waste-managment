require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');



// Set up nodemailer
const nodemailer = require('nodemailer');
const smtpTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});


// Middlewares
app.use(express.static(__dirname + '/dist/'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Start the Express server
const port = 8810;
server.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
