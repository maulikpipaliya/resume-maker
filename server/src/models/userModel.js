import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    authMail: {
        type: String,
        required: true,
    },
    data: [
        {
            basics: {
                name: {
                    type: String,
                },
                email: [
                    {
                        type: String,
                    },
                ],
            },
        },
    ],
})

const userModel = mongoose.model("User", userSchema)

export default userModel
