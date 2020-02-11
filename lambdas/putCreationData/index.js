'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-2"});

exports.handler = async(event, context) => {
	const db = new AWS.DynamoDB({ apiVersion: "2012-10-17"});
	const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2"});
	
	const params = {
		TableName: "Creations",
		Item: {
			id: "12360",
			address: "Rua Borboletas Psicodelicas",
  		birth: "01/01/2020",
  		cpf: 123456790,
  		email: "amy@whinehouse.com",
  		income: 50000,
  		loan: 100000,
  		maritial: "Divorciada",
			name: "Amy Whinehouse",
  		user_id: "6ba7b810"
		}
	}		

	try {
		const data = await docClient.put(params).promise();
		console.log(data);
	} catch (err) {
		console.log(error);
	}	
}