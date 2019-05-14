const express = require('express')
const app = express()
const axios = require("axios");

app.use('/style', express.static(__dirname + '/public/style'));
app.use('/js', express.static(__dirname + '/public/js'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

/*app.get('/beer', function(req, res) {

})*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});