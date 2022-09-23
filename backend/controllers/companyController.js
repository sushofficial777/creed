
const companySchema = require('../models/companySchema');

const db = require('../database/db');
const multer = require("multer");
const user = require('../models/userSchema');
const md5 = require('md5');





module.exports = {

   //add company 
    addcompany: async (req,res,next) =>{

        const { firstName, email, lastName, phone, companyName, password, companyLocation, location } = req.body;
           const hashedPass = md5(password);
    
        const UserData = await user.findOne({ email: email });
        console.log(`user ${UserData}`);

        const CompanyData = await companySchema.findOne({email:email})
        const verifyCompanyName = await  companySchema.findOne({companyName:companyName})
        console.log(`company ${CompanyData}`);


        if (!firstName || !email || !lastName || !phone || !companyName || !password || !companyLocation || !location) {
            res.status(400).json({error: "all fields are required"});
        }

        else if (CompanyData || CompanyData) {
            res.status(401).json({error: "User Allready Exist"});
        }
        else if (verifyCompanyName) {
            res.status(403).json({error: "Company Name Allready Exists"});
        }

        else {
           const companyData = {
            firstName:firstName,
            email:email,
            lastName: lastName,
            phone: phone,
            role:"CEO",
            location: location,
            companyName:  companyName,
            password:  hashedPass, 
            companyLocation: companyLocation
           }
          
           const CeoData = {
            firstName:firstName,
            email:email,
            lastName: lastName,
            phone: phone,
            role:"CEO",
            company:  companyName,
            password:  hashedPass, 
           
           }

        const data = new companySchema(companyData);
        data.save().then((data) => {
            res.status(201).json({
                message: "Company data created..",
                data: data
            })
            
            next();
        }).catch(err => {
            res.status(400).json({
                message: " company data can not created..",
                error: err
            })
        })
        }
    }

}