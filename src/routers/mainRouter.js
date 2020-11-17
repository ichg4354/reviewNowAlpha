import express from "express";
import path from "../paths.js";
import { getJoin, postJoin, getLogin, getHome, postLogin, postLogout, postEditPage, getEditPage, getReviewPage } from "../controller/userController.js";


export const mainRouter = express.Router();

mainRouter.get(path.HOME, getHome);
mainRouter.get(path.ABOUT, (req, res) => res.send("ABOUT"));

mainRouter.get(path.LOGIN, getLogin);
mainRouter.post(path.LOGIN, postLogin);

mainRouter.get(path.JOIN, getJoin);
mainRouter.post(path.JOIN, postJoin, postLogin);

mainRouter.get(path.LOGOUT, postLogout)

mainRouter.post(path.EDITPAGE, postEditPage);
mainRouter.get(path.EDITPAGE, getEditPage);


mainRouter.get(path.REVIEWPAGE, getReviewPage);
mainRouter.get(path.RESULTPAGE, (req, res) => res.send("RESULTPAGE"));
mainRouter.get(path.GETQRCODE, (req, res) => res.send("GETQRCODE"));
