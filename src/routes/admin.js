const express = require('express')
const router = express.Router()
const store = require("../util/multer")

const adminController = require('../controllers/adminController')

router.post('/',adminController.login)
router.get('/', adminController.index)
router.get('/categories', adminController.getCategories)    
router.get('/insert', adminController.getProducts)
router.get('/recycle_bin', adminController.getBin)
router.get('/login', adminController.showlogin)
router.get('/logout', adminController.logout)
router.delete('/delete/:id',adminController.delete)
router.delete('/delete/:id/force',adminController.forceDelete)
router.patch('/restore/:id',adminController.restore)



// router.get('/insert', adminController.waitInsert)
router.post('/insert', store.single('image'),adminController.insertProduct)
router.post('/insertCategories', adminController.insertCategory)
// product property upadte.. 
// router.get('/products/?:productDetail',adminController.productDetail)
router.get('/productDetail?:key',adminController.productDetail)
router.put('/productUpdate',store.single('image'),adminController.productUpdate)
router.get('/:slug', adminController.error)

module.exports = router