const admin = require('../models/adminSchema');
const user = require('../models/userSchema');
const department = require('../models/DepartmentSchema');
const company = require('../models/companySchema')
const { sign } = require('jsonwebtoken');
const md5 = require('md5');
const localStorage = require('localStorage');
module.exports = {
        logout: async (req, res,next) => {

       res.clearCookie('jwt');  
     
       res.status(200).send("user sign-out successfull")

        next() 
    },

    userLogin: async (req, res, next) => {

        try{
            const { email, password } = req.body;
            const matchPass = md5(password);
      
         
        const UserData = await user.findOne({ email: email });
     
        if (!email || !password) {
            res.status(400).json({ error: "plaese fill all data" });
        }

        else if (!UserData) {
            res.status(400).json({ error: "invalid  credential" });
        }
      
        else if (!(matchPass === UserData.password)) {
            res.status(400).json({ error: "invalid  credential" });
        }
        else {

            //generate token
            const token = sign({ email: email }, process.env.ADMIN_SECRET_KEY);
            res.cookie('jwt', token);

         
           console.log(UserData);
          
         return   res.send(UserData);

            next();
        }
    }catch(err){
        console.log(`err : ${err}`);
        res.status(400).json({
            err:"error during find data"

        })
    }

    },
    //////////////////get all user data////////////////////////

    getuserdata: async (req, res, next) => {

        const Data  = await user.find({"role": "CEO" &&  "employee" &&  "Manager" });
        res.status(200).json({
            message:"data found",
            data: Data
           })

    },

      //////////////////get all manager data////////////////////////

       GetManagerData: async (req, res, next) => {

        const Data  = await user.find({"role": "manager"});

       res.status(200).json({
        message:"data found",
        data: Data
       })

    },

        //////////////////get all teamlead data////////////////////////

            GetTeamleadData: async (req, res, next) => {

            const Data  = await user.find({"role":"teamlead"});
    
           res.status(200).json({
            message:"data found",
            data: Data
           })
    
        },
   //////////////////get all employee data////////////////////////
        GetEmployeeData: async (req, res, next) => {

            const Data  = await user.find({"role":"employee"});
    
           res.status(200).json({
            message:"data found",
            data: Data
           })
    
        },
     
   //////////////////get all deparment data////////////////////////
        GetDepartmentData: async (req, res, next) => {

            const Data  = await department.find();
    
           res.status(200).json({
            message:"data found",
            data: Data
           })
    
        },
         //////////////////get all deparment data////////////////////////
         GetComponyData: async (req, res, next) => {

            const Data  = await company.find();
    
           res.status(200).json({
            message:"data found",
            data: Data
           })
    
        },


      //////////////////get all manager data////////////////////////

      CountManagerData: async (req, res, next) => {

        const Data  = await user.find({"role": "manager"}).count();

        res.status(200).json({
            message:"data found",
            data: Data
           })

    },

        //////////////////get all teamlead data////////////////////////

        CountTeamleadData: async (req, res, next) => {

            const Data  = await user.find({"role":"teamleader"}).count();
    
            res.status(200).json({
                message:"data found",
                data: Data
               })
    
        },
   //////////////////get all employee data////////////////////////
        CountEmployeeData: async (req, res, next) => {

            const Data  = await user.find({"role":"employee"}).count();
    
            res.status(200).json({
                message:"data found",
                data: Data
               })
    
        },
   //////////////////get all deparment data////////////////////////
        CountDepartmentData: async (req, res, next) => {

            const Data  = await user.find().count;
    
            res.status(200).json({
                message:"data found",
                data: Data
               })
    
        },


    adduser: async (req, res, next) => {


        const { firstName, lastName, email, password, role, companyName,phone, location, image,department, parentId} = req.body;

        const UserData = await user.findOne({ email: email });
       

console.log(`god bacha lo ${UserData}`);
        if (UserData ) {
            res.status(400).json({ error: "user already exist" });
        }

        else if (!firstName || !lastName || !email ) {
            res.status(403).json({ error: "all fields are required" });
        }
        else {
            const hashedPass = md5(password);

            const userData = {
                firstName: firstName,
                lastName:lastName,
                email: email,
                password: hashedPass,
                companyName: companyName,
                role: role,
                phone:phone,
                parentId: parentId,
                location:location,
                department: department
            }

            const data = new user(userData);
            data.save().then((data) => {

                res.status(201).json({
                    message: "data created..",
                    data: data,
                    role: "data added in user table"
                })
                next();
            }).catch(err => {
                res.status(400).json({
                    message: "data can not created..",
                    error: err
                })
            })

            //    else if (userData.role === 'teamLead') {

            //         const data = new teamLead(userData);
            //         data.save().then((data) => {

            //             res.status(201).json({
            //                 message: "data created..",
            //                 data: data,
            //                 role:"data added in teamlead table"
            //             })
            //             next();
            //         }).catch(err => {
            //             res.status(400).json({
            //                 message: "data can not created..",
            //                 error: err
            //             })
            //         })
            //     }
            //    else if (userData.role === 'employee') {

            //         const data = new employee(userData);
            //         data.save().then((data) => {

            //             res.status(201).json({
            //                 message: "data created..",
            //                 data: data,
            //                 role:" data added in employee table"
            //             })
            //             next();
            //         }).catch(err => {
            //             res.status(400).json({
            //                 message: "data can not created..",
            //                 error: err
            //             })
            //         })
            //     }

        }


    }


}

