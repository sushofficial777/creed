const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName: {
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
    phone: {
        type: String,

    },
    password: {
        type: String,

    },

   companyLocation:{
   type:String
},
company_location_lat:{
    type:String
},
company_location_lon:{
    type:String
}
  
   
})

const company = mongoose.model('company', companySchema);
module.exports = company;

