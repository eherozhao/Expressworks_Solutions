const express = require('express');
const app = express();
app.get('/home', (req, res) => {
    res.end('Hello World!');
});
let portNum = process.argv[2];
app.listen(portNum);
