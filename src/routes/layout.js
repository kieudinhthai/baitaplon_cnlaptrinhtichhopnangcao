const express = require('express')
const router = express.Router()

const layoutController = require('../controllers/layoutController')
router.get('/', layoutController.show)
router.get('/detail', layoutController.show_detail)

module.exports = router