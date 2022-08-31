const express = require('express');
const router =  express.Router();
const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');

// admin add user
router.post('/adduser',userController.adduser);
router.get('/getmanager',userController.getuserdata);

//admin login
router.post('/login',userController.userLogin);
router.post('/add',adminController.addData);





module.exports = router;