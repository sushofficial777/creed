const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,

    },
    parentId: {
        type: ObjectId,
        
        
        
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
    companyName:{
        type:String,
        default:"CREED"

    },
    location:{
        type:String
    }
   


})

const user = mongoose.model('user', userSchema);
module.exports = user;

