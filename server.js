const express=require('express')
const morgan=require('morgan')
const cors=require('cors')
require('dotenv').config()
const user=require('./routes/auth')
const connectDb=require('./config/db')
const app=express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api/user',user)
connectDb()

const port=process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`server is listening ${port}`);
})


