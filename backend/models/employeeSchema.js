const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
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
    default:"employee"
   
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

const employee = mongoose.model('employee', employeeSchema);
module.exports = employee;

