const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/adminController');

router.get('/getusers', AdminController.getUsers)

module.exports = router;