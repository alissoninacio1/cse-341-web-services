const express = require('express');

const app = express();

app.use('/', require('./routes'));

const port = 5000;

app.listen(process.env.PORT || port);