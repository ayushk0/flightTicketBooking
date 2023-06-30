const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routing');
const myErrorLogger = require('./utilities/errorlogger');
const myRequestLogger = require('./utilities/requestlogger');
const cors = require("cors");
const app = express();

// const dbConfig = require('./model/db');

app.use(cors());
app.use(bodyParser.json());

app.use(myRequestLogger);
app.use('/', router);
app.use(myErrorLogger);


app.listen(1050);
console.log("Server listening at http://localhost:1050");


module.exports = app;