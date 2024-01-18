const express = require("express");
const { getData, addData } = require("../controller/menuController");
const router = express.Router()

router.get('/get-data',getData)

router.post('/add-data',addData)

module.exports = router