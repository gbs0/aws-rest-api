	'use strict';
	const AWS = require('aws-sdk');
	  
	exports.handler = async (event, context) => {
	  const docClient = new AWS.DynamoDB.DocumentClient();

	  let responseBody = "";
	  let statusCode = 0;

	  const params = {
	    TableName: "Creations"
	  };

	  try {
	    const data = await docClient.put(params).promise();
	    responseBody = JSON.stringify(data.Items);
	    statusCode = 201;
	  } catch(err) {
	    responseBody = `Unable to put : ${err}`;
	    statusCode = 403;
	  }

	  const response = {
	    statusCode: statusCode,
	    headers: {
	      "Content-Type": "application/json"
	    },
	    body: responseBody
	  };

	  return response;
	};