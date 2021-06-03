import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //check this
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/russiastore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}); //check this

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});