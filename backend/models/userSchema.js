const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    phone: {
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
        default:"NON"
      
    },
    company:{
        type:String,
        default:"CREED"

    },
    location:{
        type:String
    }
   


})

const user = mongoose.model('user', userSchema);
module.exports = user;

