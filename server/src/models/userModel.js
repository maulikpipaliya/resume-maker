import mongoose from "mongoose"
import * as ResumeSchema from "./schema.js"

//Only one MongooseSchema
const userSchema = new mongoose.Schema({
    authMail: {
        type: String,
        required: true,
    },
    data: [ResumeSchema.IResumeData],
})

const userModel = mongoose.model("User", userSchema)

export default userModel
