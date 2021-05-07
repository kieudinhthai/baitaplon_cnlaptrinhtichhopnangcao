const express = require('express')
const router = express.Router()

const layoutController = require('../controllers/layoutController')
router.get('/product-detail?:key', layoutController.show_detail)
router.post('/product-detail?:key', layoutController.comment)
router.get('/products', layoutController.get_all_products)
router.get('/:slug', layoutController.error)

//router.get('/products/:category_id', layoutController.get_products)

module.exports = router