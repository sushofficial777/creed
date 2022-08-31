const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
   role: {
    type: String,
    default:"user"
   
    },
    department:{
        type: String,
        default:"HR"
      
    },
    company:{
        type:String,
        default:"CREED"

    }
   


})

const user = mongoose.model('user', userSchema);
module.exports = user;

