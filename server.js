const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

//Database Connection
require('./server/configs/database');

//Get API Routes
const api = require('./server/routes/task');

//Declare Express App
const app = express();

//Parsers for POST data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', require('./server/routes/task'));

/**
* Get port from enviornment and store in Express
*/

const port = process.env.PORT || '3000';
app.set('port', port);


/**
* Create HTTP server
*/
const server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces
*/
server.listen(port, () => console.log(`API running on localhost:${port}`));
