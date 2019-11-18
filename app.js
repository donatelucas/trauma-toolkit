var express = require("express"),
    http = require("http"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    jsonApp = express(),
    notesTotal = {};

jsonApp.use(express.static(__dirname + "/app"));

jsonApp.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/424db1');

http.createServer(jsonApp).listen(3030);

