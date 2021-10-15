import express from "express"

import cors from "cors"
import dotenv from "dotenv"
import { config } from "../config.js"

import session from "express-session"
import MongoStore from "connect-mongo"
import mongoose from "mongoose"

import passport from "passport"

import "../../api/middlewares/passport.middleware.js"

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
            resave: false,
            saveUninitialized: true,
            cookie: {
                maxAge: oneDay,
            },
            store: MongoStore.create({
                mongoUrl: config.dbURL,
            }),
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
