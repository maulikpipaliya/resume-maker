import asyncHandler from "express-async-handler"
import userModel from "../../models/userModel.js"
import { OAuth2Client } from "google-auth-library"

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)

/**
 * @api {post} /api/login/
 */
export const googleLogin = asyncHandler(async (req, res) => {
    const { tokenId } = req.body

    console.log("tokenId")
    console.log(tokenId)

    const loginTicket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    })

    if (!loginTicket) {
        return res.status(400).json({
            success: false,
            message: "Invalid token",
        })
    }

    const { payload } = loginTicket
    const { email, name, picture, email_verified } = payload

    if (email_verified) {
        const user = await userModel.findOne({ authEmail: email })

        console.log("user")
        console.log(user)
        if (!user) {
            const newUser = new userModel({
                authEmail: email,
            })

            await newUser.save()
        }

        return res.status(200).json({
            success: true,
            message: "Login successful",
            tokenId,
            name,
            picture,
        })
    }

    res.send("google login")
})
