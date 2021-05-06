const express = require('express')
const router = express.Router()

const layoutController = require('../controllers/layoutController')
router.get('/product-detail?:key', layoutController.show_detail)

router.get('/products?', layoutController.get_all_products)
router.get('/products/:category_id', layoutController.get_products)

module.exports = router