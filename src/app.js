import express from "express";
import path from "./paths.js";
import { mainRouter } from "./routers/mainRouter.js";
import mongoose from "mongoose"
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import passport from "passport"
import session from "express-session"
import mongoStore from "connect-mongo"
import "./passport.js"
import dotenv from "dotenv"
import { localsMiddleware } from "./middlewares.js";

dotenv.config()


const app = express();

const cookieStore = mongoStore(session)

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(session({
    secret: process.env.SECRET || "SECRET",
    resave: true,
    saveUninitialized: false,
    store: new cookieStore({ mongooseConnection: mongoose.connection })
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('src'));
app.set("view engine", "pug");
app.set("views", "src/views");

app.use(localsMiddleware)
app.use(path.HOME, mainRouter);
// app.use(path.ID, userRouter);

export default app;
