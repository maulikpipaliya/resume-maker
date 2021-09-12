import asyncHandler from "express-async-handler"
import { OAuth2Client } from "google-auth-library"

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)

/**
 *
 * @param {Object} req
 * @returns Token from the header
 */
const getTokenFromHeader = (req) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        return req.headers.authorization.split(" ")[1]
    }
    return null
}

/**
 * @description Middleware to check if the user is authenticated
 * @todo Add a check for the token
 * @returns {Object} name, authEmail, picture, email_verified, tokenId, exp,
 */
const isAuthenticated = asyncHandler(async (req, res, next) => {
    const tokenId = getTokenFromHeader(req)

    if (!tokenId)
        return res.status(400).json({
            success: false,
            message: "Not logged in yet, no token found",
        })

    const loginTicket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    })

    if (!loginTicket) {
        return res.status(401).json({
            success: false,
            message: "Bad login request. Try again",
        })
    }

    const { name, email, picture, email_verified, sub, iat, exp } =
        loginTicket.getPayload()

    req.body.user = {
        name,
        authEmail: email,
        picture,
        email_verified,
        tokenId,
        exp,
    }

    console.log("Verified that user is authenticated : ", email)

    console.log("req.params")
    console.log(req.params)
    next()
})

export { isAuthenticated }
