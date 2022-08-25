const mongoose = require('mongoose');



mongoose.connect(process.env.CONNECTION_STRING).then((res) =>{
console.log("successfully connected...");
}).catch(err =>{
    console.log(err);
})