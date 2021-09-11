import mongoose from "mongoose"
import { initResumeData } from "./initResumeData.js"
import * as ResumeSchema from "./schema.js"
initResumeData
//Only one MongooseSchema
const userSchema = new mongoose.Schema({
    authEmail: {
        type: String,
        required: true,
        unique: true,
    },
    data: {
        type: [ResumeSchema.IResumeData],
        default: [initResumeData],
    },
})

const userModel = mongoose.model("User", userSchema)

export default userModel
