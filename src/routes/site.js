const express = require('express')
const router = express.Router()

const mainConstroller = require('../controllers/mainController')
router.get('/', mainConstroller.index)

module.exports = router