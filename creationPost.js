'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const { id, name, cpf, email, birth, address, loan, income, maritial } = JSON.parse(event.body);

  const params = {
    TableName: "Creations",
    Item: {
      id: id,
      name: name,
      cpf: cpf,
      email: email,
      birth: birth,
      address: address,
      loan: loan,
      income: income,
      maritial: maritial
    }
  };

  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch(err) {
    responseBody = `Unable to put new contract: ${err}`;
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