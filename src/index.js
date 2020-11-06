import express from "express";
import path from "./paths.js";
import { mainRouter } from "./routers/mainRouter.js";
// import { userRouter } from "./routers/userRouter.js";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import passport from "passport"
import session from "express-session"

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(session({ secret: "asdf", saveUninitialized: true, resave: true }));
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "pug");
app.set("views", "src/views");

app.use(path.HOME, mainRouter);
// app.use(path.ID, userRouter);

export default app;
