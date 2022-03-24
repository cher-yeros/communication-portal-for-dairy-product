const express = require('express');
const router = express.Router();

const SellerController = require('../controllers/sellerController');
const PaymentController = require('../controllers/paymentController');
const AuthController = require('../controllers/authController');
const AuthMiddleWare = require('../middlewares/authMiddleware');

router.post('/add-product', AuthMiddleWare.varifyAuth, SellerController.postProduct)
router.post('/make-payment', AuthMiddleWare.varifyAuth, PaymentController.makePayment)
router.post('/give-comment', AuthMiddleWare.varifyAuth, SellerController.giveComment)
router.put('/update-profile', AuthMiddleWare.varifyAuth, AuthController.editProfile)

module.exports = router;