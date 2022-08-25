const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    company: {
        type: String,

    },
    user_id: {
        type: String,
    },
   
   role: {
    type: String,
    default:"company"
   
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

const company = mongoose.model('company', companySchema);
module.exports = company;

