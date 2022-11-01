const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    departmentName: {
        type: String,

    },
    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    email: {
        type: String,

    },
    address: {
        type: String,

    },
    phone: {
        type: String,

    },
    password: {
        type: String,

    },

 
  
   
})

const department = mongoose.model('department', DepartmentSchema);
module.exports = department;

