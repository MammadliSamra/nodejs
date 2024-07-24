const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Goods",schema)