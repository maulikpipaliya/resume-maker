import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import { config } from "../config.js"

import session from "express-session"
import passport from "passport"
import GoogleStrategy from "passport-google-oauth20"
import userModel from "../../models/user.model.js"

import "../../api/middlewares/passport.middleware.js"

import cookieSession from "cookie-session"

export const setUpExpressServer = () => {
    const app = express()

    dotenv.config()
    app.use(cors({ origin: config.corsOrigin, credentials: true }))

    //Middleware
    app.use(express.static("../client/src/templates/style"))
    app.use(express.json())

    const oneDay = 1000 * 60 * 60 * 24

    app.use(
        session({
            secret: "secret",
            resave: true,
            saveUninitialized: true,
            cookie: {
                maxAge: oneDay,
            },
        })
    )

    // app.use(
    //     cookieSession({
    //         maxAge: 24 * 60 * 60 * 1000,
    //         keys: [config.cookieKey],
    //     })
    // )

    app.use(passport.initialize())
    app.use(passport.session())

    app.listen(config.port, () => {
        console.log(`server started at ${config.serverURL}`)
    })
    return app
}
