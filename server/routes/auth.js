const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/authController');
const AuthMiddleWare = require('../middlewares/authMiddleware');

router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)
router.post('/register', AuthController.createAccount)
router.put('/edit-profile',AuthMiddleWare.varifyAuth, AuthController.editProfile)
router.post('/reset-password', AuthController.resetPassword)

module.exports = router;