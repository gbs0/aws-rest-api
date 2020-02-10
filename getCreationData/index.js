'use strict';
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-2"})

exports.handler = async(event, context) => {
	const db = new AWS.DynamoDB({ apiVersion: "2012-10-17"});
	const documentClient = new AWS.DynamoDB.documentClient({ region: "us-east-2"});
	
	const params = {
		TableName: "Creations",
		Key: {
			id: "12345"
		}
	}		

	try {
		const data = await documentClient.get(params).promise();
		console.log(data);
	} catch (err) {
		console.log(error);
	}	
}