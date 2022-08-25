const express = require('express');
const router =  express.Router();
const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');

// admin add user
router.post('/adduser',userController.addadmin);

//admin login
router.post('/login',adminController.adminLogin);
router.post('/add',adminController.addData);





module.exports = router;