'use strict';
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-2"})

exports.handler = function(event, context, callback) {
	const db = new AWS.DynamoDB({ apiVersion: "2012-10-17"});
	const documentClient = new AWS.DynamoDB.documentClient({ region: "us-east-2"});
	const params = {
		TableName: "Creations",
		Key: {
			id: "12345"
		}
	}		

	documentClient.get(params, (err, data) => {
		if (err) {
			console.log(err);
		}
		console.log(data);
	})

}