const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
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
    default:"admin"
   
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

const admin = mongoose.model('admin', adminSchema);
module.exports = admin;

