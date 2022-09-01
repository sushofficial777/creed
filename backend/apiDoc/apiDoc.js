
const UserRouteDoc = require("../routes/docApi")
const swaggerdocumentation ={
    openapi: "3.0.0",
    info:{
        title: "creed apis",
        version:"   0.0.2",
        description:" creed project all apis"
    },
    servers: [
        {
            url: "http://localhost:8000",
            description:"local server"
        }
    ],
    tags:[
          {
            name:"UserData",
            description:"get all user data"
          },
          {
            name:"CreateUser",
            description:"create users"
          }
        ],
    paths: {
      ...UserRouteDoc
    }
}
module.exports =swaggerdocumentation;