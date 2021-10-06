import asyncHandler from "express-async-handler"
import userModel from "../../models/user.model.js"
import { OAuth2Client } from "google-auth-library"

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)

const getUserData = asyncHandler(async (req, res, next) => {
    if (req.user) {
        const user = await userModel.findById(req.user.id).select("-password")
        res.status(200).json({
            success: true,
            data: user,
        })
    } else {
        res.status(401).json({
            success: false,
            message: "Unauthorized",
        })
    }
})

/**
 * @api {post} /api/login/
 */
export const googleLogin = asyncHandler(async (req, res) => {
    const { name, authEmail, email_verified, picture, tokenId, exp } =
        req.body.user

    console.log("req.body")
    console.log(req.body)
    if (email_verified) {
        const user = await userModel.findOne({ authEmail })

        console.log("User with email " + authEmail + " found: " + user)

        if (!user) {
            const newUser = new userModel({
                authEmail,
            })

            await newUser.save()
        }

        return res.status(200).json({
            success: true,
            message: "Login successful",
            name,
            picture,
            authEmail,
            tokenId,
            exp,
        })
    }

    return res.status(401).json({
        success: false,
        message: "Login failed. Please try again",
    })
})
