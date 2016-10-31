var express = require("express");

var app = new express();

var path = require("path");

var saticpath = path.join(__dirname,"../static");

app.use(express.static(saticpath));
app.listen(5000, "0.0.0.0", function() {
	console.log('http://127.0.0.1:5000');
});
