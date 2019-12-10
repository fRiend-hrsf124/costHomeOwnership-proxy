/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));

const port = 3000;
app.listen(port, console.log(`listening on ${port}`));
