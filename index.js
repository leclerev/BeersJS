const express = require('express')
var request = require('request');
const axios = require("axios");
const key = "key=83c3578c4780db48dd6cf842b8017ddf";

const app = express()

app.use('/style', express.static(__dirname + '/public/style'));
app.use('/js', express.static(__dirname + '/public/js'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/beers/:p?/:name?', function(req, res) {
  let p = req.params.p ? "p=" + req.params.p + "&": "";
  let name = req.params.name ? "name=" + req.params.name + "&" : "";
  req.pipe(request("https://api.brewerydb.com/v2/beers?" + p + name + key)).pipe(res);
});

app.listen(process.env.PORT || 3000);

/*
var express = require('express');
var app = express();
app.use('/', function (req, res) {
  req.pipe(request("https://sandbox-api.brewerydb.com/v2" + req.url)).pipe(res);
});
app.listen(process.env.PORT || 3000);
*/