import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
require('express-async-errors');
import cors from 'cors';
import connect from './dbConfig/dbConfig';
import favListRoutes from './routes/favList';
import { notFoundMiddleware, errorHandlerMiddleware } from './middleware';

const app: Express = express();

app.use(cors())
// Middleware
app.use(express.json());
// routes
app.get('/', (req, res) => {
    res.json({ msg: 'welcome' })
})
app.use('/api/favCharityList', favListRoutes)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connect(process.env.MONGO_URI!);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();