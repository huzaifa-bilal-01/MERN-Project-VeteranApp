import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';

dotenv.config();


const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

//const CONNECTION_URL = 'mongodb+srv://aifu:fortnite123@cluster0.txi0em3.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;



mongoose.connect(process.env.CONNECTION_URL,{})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));



