const express = require('express');
const app = express();

const port = process.env.port || 3000;
app.use('/', require('./routes/index.js'))

app.listen(port);
console.log('Web Server is listening at port ' + (port));