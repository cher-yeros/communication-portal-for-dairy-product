const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/adminController');
const AuthMiddleWare = require('../middlewares/authMiddleware');

router.get('/users', AuthMiddleWare.varifyAuth, AdminController.getUsers)
router.get('/comments',AuthMiddleWare.varifyAuth, AdminController.getComments)
router.get('/generate-report',AuthMiddleWare.varifyAuth, AdminController.generateReport)
router.get('/notify-feature',AuthMiddleWare.varifyAuth, AdminController.notifyFeature)
router.get('/backup-data', AuthMiddleWare.varifyAuth, AdminController.backupData)
router.get('/restore-data', AuthMiddleWare.varifyAuth, AdminController.restoreData)

module.exports = router;