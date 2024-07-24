const {GetGoods, CreateGood} = require('../controllers/GoodsController')
const express = require('express')

const router = express.Router()
router.get('/get-all', GetGoods)
router.post('/add-to-goods', CreateGood)


module.exports = router;