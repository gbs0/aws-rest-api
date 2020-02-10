'use strict';
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-2"})


exports.handler = function(event, context, callback) {
	const db = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
	const params = {
		TableName: "Creations",
		Key: {
			id: {
				
			}
		}
	}		
}