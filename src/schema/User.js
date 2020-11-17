import mongoose from "mongoose"
import passportLocalMogoose from "passport-local-mongoose"

export const userSchema = new mongoose.Schema({
    id: String,
    buisnessName: String,
    phoneNumber: Number,
    options: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MainMenu"
    }
})

userSchema.plugin(passportLocalMogoose)

export const User = mongoose.model("User", userSchema)

