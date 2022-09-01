const express = require('express');
const router =  express.Router();
const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');

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


module.exports = router;