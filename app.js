require('dotenv').config();
require('express-async-errors');
const mongoose = require('mongoose')
const express = require('express');
mongoose.set('strictQuery', true);
const cors = require('cors')

const app = express();
const morgan=require('morgan');
const errorHandler = require('./middlewares/error-handler');
const notFound = require('./middlewares/notFound');
 const ProductRouter= require ('./routes/product')


const connectDB = require('./shared-services/db');
const port = process.env.PORT || 5000
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api/v1/prod',ProductRouter)

app.use(notFound)
app.use(errorHandler)
const start =async()=>{
try {
 await connectDB(process.env.mongo_uri).then(()=>{
    console.log('DB connected')
}).catch(()=>{
    console.log('DB failed')
})
 app.listen(port,()=>{
    console.log(`http//localhost:${port}`)
})
} catch (error) {
    console.log(error)
}
}

start ()