import mongoose, { mongo } from "mongoose"


const answerSchema = new mongoose.Schema({
    question: String
})


export const Answer = mongoose.model("User", userSchema)