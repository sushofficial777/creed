const listDoc = {


    tags: [
        "UserData"
    ],
    responses: {


        200: {
            description: "ok",
            content: {
                "applicaton/json": {

                }
            }
        }
    }
}

const createUser = {

    tags: [
        "CreateUser"
    ],
    description: "create new user",
    requestBody: {
        content: {
            "application/json":{
                schema:{
                   
                    properties:{
                      
                      
                    }
                }
            }
        }
    },
    responses: {


        200: {
            description: "ok",
            content: {
                "applicaton/json": {

                }
            }
        }
    }
}


const UserRouteDoc = {
    "/getmanager": {
        get: listDoc
    },
    "/getteamlead": {
        get: listDoc
    },
    "/getemployee": {
        get: listDoc
    },
    "/getalluserdata": {
        get: listDoc
    },
    "/adduser":{
        post:createUser
    }
}

module.exports = UserRouteDoc;