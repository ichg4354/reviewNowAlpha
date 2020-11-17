import mongoose from "mongoose"

export const mainMenuSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    options: Object,
    answers: String
})

export const MainMenu = mongoose.model("MainMenu", mainMenuSchema)