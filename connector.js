const MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://sjohnston1:PASSWORD@trauma-toolkit-tef6r.mongodb.net/test?retryWrites=true&w=majority?authSource=admin"

const dbName = 'Trauma-Toolkit'
let db

console.log("Debug 1")

MongoClient.connect(url, { useNewUrlParser: true}, (err, client) => {
	
	console.log("Debug 2")

	if (err) return console.log(err)

	db = client.db(dbName)
	console.log(`Connected MongoDB: ${url}`)
	console.log(`Database: ${dbName}`)

	var query = { Subject: "Rape Tools" };
  	db.collection("Subjects").find(query).toArray(function(err, result) {
    	if (err) throw err;
    	console.log(result);
	});

})