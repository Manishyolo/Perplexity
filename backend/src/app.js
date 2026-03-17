import express from 'express';
import authRouter from './routes/auth.route.js';
import {chatRouter} from "./routes/chat.route.js"
import cookieParser from 'cookie-parser';
import morgan from "morgan"
import cors from "cors"


const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"],
}))


app.use('/user',authRouter);
app.use('/user',chatRouter);

export default app;
