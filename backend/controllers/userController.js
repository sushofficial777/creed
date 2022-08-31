const admin = require('../models/adminSchema');
const user = require('../models/userSchema');
const { sign } = require('jsonwebtoken');



const md5 = require('md5');
module.exports = {

    userLogin: async (req, res, next) => {

        const { email, password } = req.body;
        const matchPass = md5(password);

        const UserData = await user.findOne({ email: email });


        if (!email || !password) {
            res.status(400).json({ error: "plaese fill all data" });
        }

        else if (!UserData) {
            res.status(400).json({ error: "invalid credential" });
        }
        else if (!(matchPass === UserData.password)) {
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
    //////////////////////////////////////////////////////////



    getuserdata: async (req, res, next) => {

        const Data  = await user.find({"role":"superadmin"});

        res.send(Data)

      
 


    },
    adduser: async (req, res, next) => {


        const { name, email, password, role, department, company, image, } = req.body;

        const UserData = await user.findOne({ email: email });

        if (UserData) {
            res.status(400).json({ error: "user already exist" });
        }

        else if (!name || !email || !password || !role || !company) {
            res.status(400).json({ error: "all fields are required" });
        }
        else {
            const hashedPass = md5(password);

            const userData = {
                name: name,
                email: email,
                password: hashedPass,
                company: company,
                role: role,
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

