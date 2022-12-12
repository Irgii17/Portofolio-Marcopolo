const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 80;
const staticpath = path.join(__dirname, '/')

app.use(express.static(staticpath));

app.get('/', function(req, res) {
    res.sendFile(staticpath + '/index.html');
});

app.listen(port);