const express = require('express');
const app = express();

let portNum = process.argv[2];
let idxPath = process.argv[3];

app.set('view engine', 'pug');
app.set('views', idxPath || path.join(__dirname, 'templates'));
app.get('/home', (req, res) => {
    res.render('index', {date: new Date().toDateString()});
});

app.listen(portNum);
