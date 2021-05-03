const express = require('express')
const router = express.Router()

const adminController = require('../controllers/adminController')
router.get('/', adminController.index)
router.post('/insert/', adminController.insert)


module.exports = router