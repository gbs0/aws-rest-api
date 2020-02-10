'use strict';
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-2"})

exports.handler = function(event, context, callback) {
	const db = new AWS.DynamoDB({ apiVersion: "2012-10-17"});
	const params = {
		TableName: "Creations",
		Key: {
			id: {
				S: "12345"
			}
		}
	}		

	db.getItem(params, (err, data) => {
		if (err) {
			console.log(err);
		}
		console.log(data);
	})

}