const express = require('express');
const router = express.Router();

const BuyerController = require('../controllers/buyerController');
const AuthMiddleWare = require('../middlewares/authMiddleware');

router.get('/get-products', AuthMiddleWare.varifyAuth, BuyerController.getProduct)
router.get('/search-product',AuthMiddleWare.varifyAuth, BuyerController.searchProduct)
router.get('/nearby',AuthMiddleWare.varifyAuth, BuyerController.getNearbyProduct)
router.get('/get-info',AuthMiddleWare.varifyAuth, BuyerController.getInformation)
router.post('/comment',AuthMiddleWare.varifyAuth, BuyerController.giveComment)

module.exports = router;