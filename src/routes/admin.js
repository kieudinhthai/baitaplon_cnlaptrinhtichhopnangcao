const express = require('express')
const router = express.Router()

const adminController = require('../controllers/adminConstroller')
router.get('/', adminController.index)


module.exports = router