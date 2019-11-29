
var express = require("express"),
    http = require("http"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    jsonApp = express();

const url = "mongodb+srv://sjohnston1:skj1skj2@trauma-toolkit-tef6r.mongodb.net/test?retryWrites=true&w=majority?authSource=admin";

jsonApp.use(express.static(__dirname + "/app"));

jsonApp.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(url, {dbName: "Trauma-Toolkit"}, { useNewUrlParser: true });

mongoose.connect(url, function(err) {
  console.log("Successfully connected to MongoDB");
});

var schema = mongoose.Schema({
	"Topic": String,
	"Definition": String,
	"Mental Health Services": String,
	"Physical Health Services": String,
	"Reporting Options": String,
	"Helpful Links": String
});

var collectionName = "Subjects";

var model = mongoose.model("Subject", schema, collectionName);

http.createServer(jsonApp).listen(3030);

jsonApp.get("/Subjects.json", function(req, res) {
	console.log("Debug 1");
	model.find({}, function (error, Subjects) {
		console.log("Debug 2");
		res.json(Subjects);
	});
});

jsonApp.get("/RapeTools.json", function(req, res) {
	model.find({ "Topic":"Rape Tools" }, function (error, RapeTools) {
		res.json(RapeTools);
	});
});

jsonApp.get("/SexualAbuseTools.json", function(req, res) {
	model.find({ "Topic":"Sexual Abuse Tools" }, function (error, SexualAbuseTools) {
		res.json(SexualAbuseTools);
	});
});
