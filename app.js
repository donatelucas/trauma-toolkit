
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

var SubjectsSchema = mongoose.Schema({
	"Topic": String,
	"Definition": String,
	"Mental Health Services": String,
	"Physical Health Services": String,
	"Reporting Options": String,
	"Helpful Links": String
});

var Subject = mongoose.model("Subject", SubjectsSchema);

http.createServer(jsonApp).listen(3030);

jsonApp.get("/Subjects.json", function(req, res) {
	Subject.find({}, function (error, Subjects) {
		res.json(Subjects);
	});
});

