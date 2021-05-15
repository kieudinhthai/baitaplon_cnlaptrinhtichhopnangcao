const express = require('express')
const router = express.Router()


const adminController = require('../controllers/adminController')

router.get('/', adminController.index)
router.get('/categories', adminController.getCategories)    
router.get('/products', adminController.getProducts)
router.get('/recycle-bin', adminController.getBin)
router.get('/login', adminController.showlogin)
router.get('/logout', adminController.logout)


router.post('/login',adminController.login)


module.exports = router