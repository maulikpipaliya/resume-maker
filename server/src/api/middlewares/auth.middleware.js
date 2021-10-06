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
    if (req.user) {
        return next()
    } else {
        return res.status(401).json({
            success: false,
            message: "You are not authenticated",
        })
    }
})

export { isAuthenticated }
