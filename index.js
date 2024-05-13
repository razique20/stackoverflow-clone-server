import express from 'express'
import mongoose, { Mongoose } from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js'



const app = express();
app.use(express.json({limit: "30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.get('/',(req,res) => {
    res.send("This is a stack overflow clone Api")
})

app.use('/user', userRoutes)

const PORT = process.env.PORT || 5000



const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow-clone.3gi35lw.mongodb.net/?retryWrites=true&w=majority&appName=stack-overflow-clone"
mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT,() => {console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))