const express = require('express')
const router = express.Router()

const layoutController = require('../controllers/layoutController')
router.get('/detail', layoutController.show_detail)
router.get('/', layoutController.show)

module.exports = router