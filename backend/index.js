const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const userRouter = require('./routes/userRouter/userRouter')
const dbConnection = require('./config/db/dbConnection')


dotenv.config()
dbConnection()
const app=express()


app.use(express.json())


app.use(cors())




app.use('/api/user',userRouter)

let port=process.env.PORT || 5000
app.listen(port,console.log("server started"))


