var AWS = require("aws-sdk");

let awsConfig = {
	"region" : "us-east-2",
	"endpoint" : "http://dynamodb.us-east-2.amazonaws.com",
	"accessKeyID" : "AKIAJPABXQUA2OPSE2LA", "secretAccessKey" : "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"
};

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let fetchOneByKey = function() {
	
	var params = {
		TableName: "TraumaToolkit",
		Key: {
			"ID" : "3"
		}
	};
	
	docClient.get(params, function (err, data) {
		if (err) {
			console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
		} 
		else {
			console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
		}
	})
}

fetchOneByKey();