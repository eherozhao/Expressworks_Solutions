const express = require('express');
const path = require('path');
const app = express();

let portNum = process.argv[2];

app.put('/message/:id', (req, res) => {
    let id = req.params.id;
    let date = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');

    res.send(date);
});

app.listen(portNum);




