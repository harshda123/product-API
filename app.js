//import
const express = require('express')
const mongoose = require('mongoose')
const product = require('./model/product')
const productRoute = require('./route/productRoute')
require('dotenv/config')
// const cors = require('cors')


//initialization
const app = express()

//midlleware
app.use(express.json())
// app.use(cors())

//default route
app.get('/',(req,res)=>{
    res.send("home")
})


app.use('/api/product',productRoute)

//condition
app.listen(process.env.PORT)

async function main(){
    const res = await mongoose.connect(process.env.DB,{useNewUrlParser: true,
    useUnifiedTopology: true})
    const data = await res.default
    console.log(data.STATES['1'])
}
main()