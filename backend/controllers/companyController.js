const cookieParser = require('cookie-parser');
const { signedCookies } = require('cookie-parser');
const { sign } = require('jsonwebtoken');

const companySchema = require('../models/companySchema');
const md5  = require('md5');
const db = require('../database/db');

module.exports = {

   //add company 
    addcompany: async (req,res,next) =>{
        const { companyName, companyLogo } = req.body;

        console.log(companyName);
        console.log(companyLogo);

        if (!companyName|| !companyLogo ) {
            res.status(400).json({error: "all fields are required"});
        }
        else {
           const companyData = {
                name: companyName,
                logo: companyLogo,
              
               
            }
    
        const data = new companySchema(companyData);
        data.save().then((data) => {

            res.status(201).json({
                message: "data created..",
                data: data
            })
            next();
        }).catch(err => {
            res.status(400).json({
                message: "data can not created..",
                error: err
            })
        })
        }


    }

}