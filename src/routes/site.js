const express = require('express')
const router = express.Router()

const mainConstroller = require('../controllers/siteController')
router.get('/search', mainConstroller.search)
router.get('/', mainConstroller.index)

module.exports = router