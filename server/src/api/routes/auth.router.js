import { Router } from "express"
import passport from "passport"

import { isAuthenticated } from "../middlewares/auth.middleware.js"

const router = Router({
    mergeParams: true, // merge params from parent router
})

const successRedirect = `${process.env.CLIENT_URL}/landing?loggedIn=true`
const failureRedirect = `${process.env.CLIENT_URL}/landing?loggedIn=false`

router.get("/", (req, res) => {
    res.send("Hello World")
})

router.get(
    "/google/login",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
)

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: failureRedirect,
    }),
    (req, res) => {
        console.log("req.user", req.user)
        res.redirect(successRedirect)
    }
)

router.get("/getUserData", isAuthenticated, (req, res) => {
    res.send({
        success: true,
        data: req.user,
    })
})

router.get("/google/logout", (req, res) => {
    req.logout()
    res.send({
        success: true,
        message: "LOGGED_OUT",
    })
})

export default router
