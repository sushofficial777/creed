const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const dotenv = require('dotenv');
require('dotenv').config();
require('./database/db')

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}));



//base route
const userRouter = require('./routes/api')
app.use('/superadmin',userRouter);





const PORT = process.env.PORT || 8001;
app.listen(PORT, ()=>{
    console.log(`running...... at ${PORT}`);
})

