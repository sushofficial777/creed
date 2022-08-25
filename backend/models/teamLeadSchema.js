const mongoose = require('mongoose');


const teamLeadSchema = new mongoose.Schema({
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
    default:"teamLead"
   
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

const teamLead = mongoose.model('teamLead', teamLeadSchema);
module.exports = teamLead;

