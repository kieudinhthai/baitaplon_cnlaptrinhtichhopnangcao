const express = require('express')
const router = express.Router()

const layoutController = require('../controllers/layoutController')
router.get('/detail/:key?', layoutController.ProductDetail)
router.get('/', layoutController.show)

module.exports = router