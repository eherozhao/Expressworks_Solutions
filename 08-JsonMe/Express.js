const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const portNum = process.argv[2];
const filePath = process.argv[3];

app.get('/books', (req, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
        }
        res.json(JSON.parse(data));
    });
});

app.listen(portNum);
