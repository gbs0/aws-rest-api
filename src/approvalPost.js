'use strict';
const AWS = require('aws-sdk');
// const uuidv3 = require('uuid/v3');
  
exports.handler = async (event, context) => {
  // const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });
  const docClient = new AWS.DynamoDB.DocumentClient();
  console.log(event);

  let responseBody = "";
  let statusCode = 0;

  const { id, address_proof, document, property_img, user_id } = JSON.parse(event.body);

  const params = {
    TableName: "Uploads",
    Item: {
      id: id,
      address_proof: address_proof,
      document: document,
      property_img: property_img,
      user_id: user_id
    }
  };

  try {
    const data = await docClient.put(params).promise();
    responseBody = JSON.stringify(data);
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