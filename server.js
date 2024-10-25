var express = require('express');
var app = express();

app.use('/info', function(req, res){
    res.send('hello world');
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;