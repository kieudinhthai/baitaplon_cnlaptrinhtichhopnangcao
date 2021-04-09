const express = require('express')
const router = express.Router()

const homeConstroller = reqire('../modules/homeConstroller')
router.get('/', homeConstroller.index)

module.exports(route)