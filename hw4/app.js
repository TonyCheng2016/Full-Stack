var express = require('express');
var app = express();
var fs = require('fs');
var page1 = fs.readFileSync(__dirname + '/index.html','utf8');
var page2 = fs.readFileSync(__dirname + '/works.html','utf8');
var page3 = fs.readFileSync(__dirname + '/err.html','utf8');
var page4 = fs.readFileSync(__dirname + '/about.html','utf8');
var page5 = fs.readFileSync(__dirname + '/contact.html','utf8');
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send(page1);
});

app.get('/index.html', function(req, res) {
	res.send(page1);
});

app.get('/works.html', function(req, res) {
	res.send(page2);
});

app.get('/about.html', function(req, res) {
	res.send(page4);
});

app.get('/contact.html', function(req, res) {
	res.send(page5);
});

app.get('*', function(req, res) {
	res.send(page3);
});



app.listen(port);