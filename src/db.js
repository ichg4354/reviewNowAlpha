import mongoose from "mongoose"

const db = mongoose.connection

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })

db.on("error", (error) => console.log(error))
db.once("open", () => console.log("connected to db"))

