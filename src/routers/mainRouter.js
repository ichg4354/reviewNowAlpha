import express from "express";
import path from "../paths.js";
import { getJoin, postJoin, getLogin } from "../controller/userController.js";


export const mainRouter = express.Router();

mainRouter.get(path.HOME, (req, res) => res.render("home"));
mainRouter.get(path.LOGIN, getLogin);
mainRouter.get(path.ABOUT, (req, res) => res.send("ABOUT"));

mainRouter.get(path.JOIN, getJoin);
mainRouter.post(path.JOIN, postJoin);

mainRouter.get(path.LOGOUT, (req, res) => res.send("LOGOUT"));
mainRouter.get(path.EDITPAGE, (req, res) => res.send("EDITPAGE"));
mainRouter.get(path.REVIEWPAGE, (req, res) => res.send("REVIEWPAGE"));
mainRouter.get(path.RESULTPAGE, (req, res) => res.send("RESULTPAGE"));
mainRouter.get(path.GETQRCODE, (req, res) => res.send("GETQRCODE"));
