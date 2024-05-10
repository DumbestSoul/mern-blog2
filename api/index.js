import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config()

mongoose
.connect(process.env.MONGO)
.then(()=>{
        console.log("Database is Connected")
    })
.catch((err)=>{
    console.log(err)
})

const app = express();

app.use('/api/user', userRoutes);

app.listen(3000, ()=>{
    console.log("Listening to port 3000!!");
});