import { Router } from "express"
import passport from "passport"

import {
    EducationController,
    BasicController,
    AuthController,
} from "../controllers/index.js"
import { isAuthenticated } from "../middlewares/auth.middleware.js"

import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { config } from "../../config/config.js"

import userModel from "../../models/user.model.js"

import { AuthMiddleware } from "../middlewares/index.js"

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

/**
 * Basic Details Object Manipulation
 */

router.get(
    "/basics",
    AuthMiddleware.isAuthenticated,
    BasicController.getBasicDetails
)
router.put(
    "/basics",
    AuthMiddleware.isAuthenticated,
    BasicController.updateBasicDetails
)
router.delete(
    "/basics",
    AuthMiddleware.isAuthenticated,
    BasicController.resetBasicDetails
)

/**
 * Education Details Object Manipulation
 * @todo complete all APIs
 */

router.get(
    "/education",
    AuthMiddleware.isAuthenticated,
    EducationController.getAllEducationItems
)
router.get(
    "/education/:eIdx",
    AuthMiddleware.isAuthenticated,
    EducationController.getEducationItem
)
// router.put(
//     "/education/:eIdx",
//     AuthMiddleware.isAuthenticated,
//     EducationController.updateEducation
// )

export default router
