'use strict';
const AWS = require('aws-sdk');
// const uuidv3 = require('uuid/v3');
  
exports.handler = async (event, context) => {
  // const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });
  const docClient = new AWS.DynamoDB.DocumentClient();
  console.log(event);

  let responseBody = "";
  let statusCode = 0;
  
//   function validatingJSON (event) {
//   const {address, birth, cpf, email, id, income, loan, maritial, name, user_id}
//   try {
//    const {address, birth, cpf, email, id, income, loan, maritial, name, user_id} = JSON.parse(event.body);
//   } catch (e) {
//     console.log(e);
//   }
//   return {address, birth, cpf, email, id, income, loan, maritial, name, user_id} 
// }

  const { address, birth, cpf, email, id, income, loan, maritial, name, user_id } = JSON.parse(event.body);

  const params = {
    TableName: "Creations",
    Item: {
      address: address,
      birth: birth,
      cpf: cpf,
      email: email,
      id: id,
      income: income,
      loan: loan,
      maritial: maritial,
      name: name,
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