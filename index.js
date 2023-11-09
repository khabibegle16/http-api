// const AWS = require("aws-sdk")
// AWS.config.update({region:"us-east-1"})
// const docClient = new AWS.DynamoDB.DocumentClient()



// module.exports.handler = async (event) => {
//   const parms = {
//     TableName:"serverless-data",
//     Key:{
//       id:await event?.queryStringParameters?.rollno
//     }
//   }
//   const result = await docClient.get(parms).promise()
//   return {
//     statusCode: 200,
//     body: JSON.stringify(result)
    
//   };
// };
var moment = require('moment');
module.exports.handler = async (event) => {
  
  return {
    statusCode: 200,
    body: JSON.stringify({"msg":moment().format()})
    
  };
};
