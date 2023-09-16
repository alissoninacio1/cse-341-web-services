const express = require('express');
const app = express();
const port = 5000;

app.use('/', require('./routes'));

app.listen(process.env.PORT || port);