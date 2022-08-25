const cookieParser = require('cookie-parser');
const { signedCookies } = require('cookie-parser');
const { sign } = require('jsonwebtoken');

const admin = require('../models/adminSchema');
const md5  = require('md5');
const db = require('../database/db');

module.exports = {



    adminLogin: async (req, res, next) => {

      

       

        const { email, password } = req.body;

        const AdminData = await admin.findOne({email:email});
        console.log(AdminData);


        if (!email || !password) {
            res.status(400).json({ error: "plaese fill all data" });
        }

        else if (!AdminData) {
            res.status(400).json({ error: "invalid credential" });
        }
        else if (!(password === process.env.ADMIN_PASS)) {
            res.status(400).json({ error: "invalid credential" });
        }
        else {
        

            //generate token
            const token = sign({ email: email }, process.env.ADMIN_SECRET_KEY);
            res.cookie('jwt', token);




            return res.status(200).json({ message: "you are successfully logged-in" });


            next();
        }

    },
    addData: async (req,res,next) =>{
        const { name, email, password } = req.body;

        if (!name || !email || !password ) {
            res.status(400).json({ error: "all fields are required" });
        }
        else {
            const hashedPass = md5(password);

            const  adminData = {
                name: name,
                email: email,
                password: hashedPass,
               
            }


            
        const data = new admin(adminData);
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