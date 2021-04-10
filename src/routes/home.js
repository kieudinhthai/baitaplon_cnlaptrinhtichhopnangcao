const express = require('express')
const router = express.Router()

const homeConstroller = require('../controllers/homeConstroller')
router.get('/', homeConstroller.index)

module.exports = router