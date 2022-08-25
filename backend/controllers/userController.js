const admin = require('../models/adminSchema');
const employee = require('../models/employeeSchema');
const teamLead = require('../models/teamLeadSchema');
const md5 = require('md5');
module.exports = {
    addadmin: (req, res, next) => {


        const { name, email, password, role, department, company } = req.body;

        if (!name || !email || !password || !role || !department || !company) {
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


            if (userData.role === 'admin') {

                const data = new admin(userData);
                data.save().then((data) => {

                    res.status(201).json({
                        message: "data created..",
                        data: data,
                        role:"data added in admin table"
                    })
                    next();
                }).catch(err => {
                    res.status(400).json({
                        message: "data can not created..",
                        error: err
                    })
                })
            }
           else if (userData.role === 'teamLead') {

                const data = new teamLead(userData);
                data.save().then((data) => {

                    res.status(201).json({
                        message: "data created..",
                        data: data,
                        role:"data added in teamlead table"
                    })
                    next();
                }).catch(err => {
                    res.status(400).json({
                        message: "data can not created..",
                        error: err
                    })
                })
            }
           else if (userData.role === 'employee') {

                const data = new employee(userData);
                data.save().then((data) => {

                    res.status(201).json({
                        message: "data created..",
                        data: data,
                        role:" data added in employee table"
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
}

