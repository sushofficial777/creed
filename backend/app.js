const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser  = require('body-parser')

const SwaggerDoc= require('swagger-ui-express');
const swaggerDocumantation = require('./apiDoc/apiDoc')
const dotenv = require('dotenv');
require('dotenv').config();
require('./database/db');
const userRouter = require('./routes/api');

//api doc with swagger
app.use('/apiDoc', SwaggerDoc.serve);
app.use('/apiDoc', SwaggerDoc.setup(swaggerDocumantation))

app.use(express.json());
app.use(cookieParser())
app.use((cors()))
app.use(express.urlencoded({extended:true}));

//base route



app.use('/',userRouter);

const PORT = process.env.PORT || 8001;
app.listen(PORT, ()=>{
    console.log(`running...... at ${PORT}`);
})

