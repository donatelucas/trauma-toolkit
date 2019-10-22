var AWS = require("aws-sdk");

let awsConfig = {
	"region" : "us-east-2",
	"endpoint" : "http://dynamodb.us-east-2.amazonaws.com",
	"accessKeyID" : "AKIAYJRLBTN5RQY2VJM3", "secretAccessKey" : "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"
};

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let fetchOneByKey = function() {
	
	var params = {
		TableName: "Trauma_Toolkit",
		Key: {
			"ID" : "3",
			"Subject Name" : "Sexual Assault Tools"
		}
	};
	
	docClient.get(params, function (err, data) {
		if (err) {
			console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
		} 
		else {
			console.log ("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
		}
	})
}