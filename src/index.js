import express from "express";
import { path } from "./paths.js";

const PORT = 5000;

const app = express();

app.get(path.HOME, (req, res) => res.send("home"));

app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}`));
