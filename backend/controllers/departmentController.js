
const departmentSchema = require('../models/DepartmentSchema');

const db = require('../database/db');
const multer = require("multer");
const user = require('../models/userSchema');
const md5 = require('md5');


module.exports = {

   //add Department 
    addDepartment: async (req,res,next) =>{ 

        const { firstName, email, lastName, phone, departmentName, password,  } = req.body;
           const hashedPass = md5(password);
    
        const UserData = await user.findOne({ email: email });
        console.log(`user ${UserData}`);

        const DepartmentData = await departmentSchema.findOne({email:email})
        const verifyDepartmentName = await  departmentSchema.findOne({departmentName:departmentName})
        console.log(`Department ${DepartmentData}`);


        if (!firstName || !email || !lastName || !phone || !departmentName || !password ) {

            res.status(400).json({error: "all fields are required"});
        }

        else if (DepartmentData || UserData) {
            res.status(401).json({error: "Email Allready Exist"});
        }
        else if (verifyDepartmentName) {
            res.status(403).json({error: "department Name Allready Exists"});
        }


        else {
           const departmentData = {
            firstName:firstName,
            email:email,
            lastName: lastName,
            phone: phone,
            departmentName: departmentName,
            password:  hashedPass, 
       
           }
          
       

        const data = new departmentSchema(departmentData);
        data.save().then((data) => {
            res.status(201).json({
                message: "department data created..",
                data: data
            })
            
            next();
        }).catch(err => {
            res.status(400).json({
                message: " department data can not created..",
                error: err
            })
        })
        }
    }

}