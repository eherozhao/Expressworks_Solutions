const express = require('express');
const path = require('path');
const app = express();

let portNum = process.argv[2];
let webPath = process.argv[3];

app.use(require('stylus').middleware(webPath || path.join(__dirname, 'public')));
app.use(express.static(webPath || path.join(__dirname, 'public')));

app.listen(portNum);
