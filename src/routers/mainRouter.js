import express from "express";
import path from "../paths.js";

export const mainRouter = express.Router();

mainRouter.get(path.HOME, (req, res) => res.send("HOME"));
mainRouter.get(path.LOGIN, (req, res) => res.send("LOGIN"));
mainRouter.get(path.ABOUT, (req, res) => res.send("ABOUT"));
mainRouter.get(path.SIGNUP, (req, res) => res.send("SIGNUP"));
mainRouter.get(path.LOGOUT, (req, res) => res.send("LOGOUT"));

mainRouter.get(path.ID, (req, res) => res.send("ID"));
mainRouter.get(path.EDITPAGE, (req, res) => res.send("EDITPAGE"));
mainRouter.get(path.REVIEWPAGE, (req, res) => res.send("REVIEWPAGE"));
mainRouter.get(path.RESULTPAGE, (req, res) => res.send("RESULTPAGE"));
mainRouter.get(path.GETQRCODE, (req, res) => res.send("GETQRCODE"));
