const MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://sjohnston1:password@trauma-toolkit-tef6r.mongodb.net/test?retryWrites=true&w=majority?authSource=admin"

const dbName = 'Trauma-Toolkit'
let db

MongoClient.connect(url, { useNewUrlParser: true}, (err, client) => {

	if (err) return console.log(err)

	db = client.db(dbName)
	console.log(`Connected MongoDB: ${url}`)
	console.log(`Database: ${dbName}`)

	var query = { Topic: "Rape Tools" };
  	db.collection("Subjects").find(query).toArray(function(err, result) {
    	if (err) throw err;
    	console.log(result);
	});

})
