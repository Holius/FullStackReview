var express = require('express');
var app = express();
var port = 3030
var path = require('path');

app.use(express.static(path.join(__dirname,'../dist')))

app.get('/Saeger', (req,res) => {
    
})

app.listen(port, () => {
    console.log('Port ' + port + ' is running')
})