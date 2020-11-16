import express from "express";
import path from "../paths.js";
import { getJoin, postJoin, getLogin, getHome, postLogin, postLogout } from "../controller/userController.js";


export const mainRouter = express.Router();

mainRouter.get(path.HOME, getHome);
mainRouter.get(path.ABOUT, (req, res) => res.send("ABOUT"));

mainRouter.get(path.LOGIN, getLogin);
mainRouter.post(path.LOGIN, postLogin);

mainRouter.get(path.JOIN, getJoin);
mainRouter.post(path.JOIN, postJoin, postLogin);

mainRouter.get(path.LOGOUT, postLogout)

mainRouter.get(path.EDITPAGE, (req, res) => res.render("editPage"));
mainRouter.post(path.EDITPAGE, (req, res) => console.log(req.body.addWord));


mainRouter.get(path.REVIEWPAGE, (req, res) => res.send("REVIEWPAGE"));
mainRouter.get(path.RESULTPAGE, (req, res) => res.send("RESULTPAGE"));
mainRouter.get(path.GETQRCODE, (req, res) => res.send("GETQRCODE"));
