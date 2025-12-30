import express from 'express';
import { connectDB } from './config/database';
import userRoute from './routes/user.route';
const app = express();

app.use(express.json());
connectDB();
app.use('/users',userRoute);

app.listen(5000,()=>{
    console.log('Server Running On PORT 5000')
})