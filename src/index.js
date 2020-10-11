import express from "express";
import path from "./paths.js";
import { mainRouter } from "./routers/mainRouter.js";
import { userRouter } from "./routers/userRouter.js";

const app = express();

app.use(path.HOME, mainRouter);
app.use(path.ID, userRouter);

export default app;
