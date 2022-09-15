const express = require('express');
const router =  express.Router();
const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');
const companyController = require('../controllers/companyController')

// admin add user
router.post('/adduser',userController.adduser);
router.get('/getalluserdata',userController.getuserdata);

//admin login
router.post('/login',userController.userLogin);
router.post('/add',adminController.addData);

// fetching data
router.get('/getmanager',userController.GetManagerData);
router.get('/getteamlead',userController.GetTeamleadData);
router.get('/getemployee',userController.GetEmployeeData);
router.get('/getemployee',userController.GetEmployeeData);

//count manager
router.get('/countmanager',userController.CountManagerData);
router.get('/countteamlead',userController.CountTeamleadData);
router.get('/countemployee',userController.CountEmployeeData);

//ADD COMPANY
router.post('/addcompany',companyController.addcompany);


module.exports = router;