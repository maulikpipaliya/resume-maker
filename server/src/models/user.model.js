import mongoose from "mongoose"
import { initResumeData } from "./initResumeData.js"
import * as ResumeSchema from "./schema.js"
initResumeData
//Only one MongooseSchema
const userSchema = new mongoose.Schema({
    authEmail: {
        type: String,
        unique: true,
    },
    googleId: {
        type: String,
        unique: true,
    },
    authProfile: {
        type: ResumeSchema.IGoogleProfile,
    },
    data: {
        type: [ResumeSchema.IResumeData],
        default: [initResumeData],
    },
})

const userModel = mongoose.model("User", userSchema)

export default userModel
