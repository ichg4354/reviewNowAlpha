import mongoose from "mongoose"
import passportLocalMogoose from "passport-local-mongoose"

const userSchema = new mongoose.Schema({
    id: String,
    buisnessName: String,
    phoneNumber: Number,
})

userSchema.plugin(passportLocalMogoose, { usernameField: "id" })

export const User = mongoose.model("User", userSchema)