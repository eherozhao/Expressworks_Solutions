const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
let portNum = process.argv[2];

app.listen(portNum);

