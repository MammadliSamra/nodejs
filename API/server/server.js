const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const goodsRoutes = require('./routes/goodsRoutes')

let app = express()

app.use(bodyParser.json())

const connectDB = async () => {
    try{
        let connect = await mongoose.connect('mongodb+srv://samra:Secret1234@cluster0.sz77u0k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('mongodb is work')
    }catch(err){
        console.log(err)
    }
}

connectDB()

app.use('/api/goods', goodsRoutes)

app.listen(3000)