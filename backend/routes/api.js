const express = require('express');
const router =  express.Router();
const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');
const companyController = require('../controllers/companyController')
const departmentController =require('../controllers/departmentController')
const AuthController = require('../controllers/AuthController')
const sendMail = require('../controllers/mailController');
const adminAuth = require('../auth/adminAuth');

// admin add user
router.post('/adduser',adminAuth,userController.adduser);
router.get('/getalluserdata',adminAuth,userController.getuserdata);

//admin login
router.post('/login',userController.userLogin);
router.post('/add',adminController.addData);

// fetching data
router.get('/getmanager',adminAuth,userController.GetManagerData);//
router.get('/getteamlead',adminAuth,userController.GetTeamleadData);//
router.get('/getemployee',adminAuth,userController.GetEmployeeData);  
router.get('/getcompany',adminAuth,userController.GetComponyData);
router.get('/getdepartment',adminAuth,userController.GetDepartmentData);

//count manager
router.get('/countmanager',adminAuth,userController.CountManagerData);
router.get('/countteamlead',adminAuth,userController.CountTeamleadData);
router.get('/countemployee',adminAuth,userController.CountEmployeeData);

//ADD COMPANY
router.post('/addcompany',adminAuth,companyController.addcompany);

//ADD DEPARTMENT
router.post('/adddepartment',adminAuth,departmentController.addDepartment);

//SEND MAIL
router.post('/sendmail',adminAuth,sendMail.sendMail);
//AUTH API
router.get('/authentication',AuthController.getToken);
 
//LOGOUT API

router.get('/logout',userController.logout);


module.exports = router;