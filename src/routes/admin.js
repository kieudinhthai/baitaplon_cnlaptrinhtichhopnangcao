const express = require('express')
const router = express.Router()

<<<<<<< HEAD
const adminController = require('../controllers/adminConstroller')
router.get('/', adminController.index)
router.post('/insert/', adminController.insert)

router.get("/product/:key?", adminController.findProduct)
    // get - query
    // truyền vào "key" một trong các object: name, vn_name, price, rate, id
    // trả về bảng: render("admin/index") - > trả về danh sách các product có thuộc tính trùng hợp
    // anywhere :v

// router.get('/productfind/:key?', adminController.findOneProductName)
router.get('/productFindBy_id/:key?', adminController.findProductBy_id)

// update-----------------------------------
router.get("/productUpdate/:key?", adminController.waitUpdate)
router.put("/productUpdating", adminController.update)
    //  b1. url: ../productUpdate/?key=productID
    //      get - query
    //      render: /admin/updateProducts, data = product
    //  b2. put tới url: ../productUpdating
    //      render  /admin.

=======
const adminController = require('../controllers/adminController')
router.get('/', adminController.index)
router.post('/insert/', adminController.insert)

>>>>>>> origin/thai_branch

module.exports = router