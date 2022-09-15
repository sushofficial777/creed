const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,

    },
   companyLogo:{
    data: Buffer,
    contentType: String
}
   
})

const company = mongoose.model('company', companySchema);
module.exports = company;

