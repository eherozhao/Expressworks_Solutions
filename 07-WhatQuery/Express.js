const express = require('express');
const app = express();

let portNum = process.argv[2];
app.get('/search', (req, res) => {
    let query = req.query;
    res.send(query);
});

app.listen(portNum || 3000);
