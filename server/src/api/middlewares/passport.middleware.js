import passport from "passport"

import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { config } from "../../config/config.js"
import { initResumeData } from "../../models/initResumeData.js"

import userModel from "../../models/user.model.js"

const {
    googleClientId: clientID,
    googleClientSecret: clientSecret,
    googleCallbackURL: callbackURL,
} = config

console.log("callbackURL", callbackURL)

passport.use(
    new GoogleStrategy(
        {
            clientID,
            clientSecret,
            callbackURL,
            passReqToCallback: true,
        },
        async (req, accessToken, refreshToken, profile, done) => {
            try {
                console.log("profile", profile)
                const user = await userModel.findOne({ googleId: profile.id })

                if (user) {
                    done(null, user)
                } else {
                    const newUser = await userModel.create({
                        googleId: profile.id,
                        authEmail: profile.emails[0].value,
                        "authProfile.googleId": profile.id,
                        "authProfile.authEmail": profile.emails[0].value,
                        "authProfile.picture": profile.photos[0].value,
                        "authProfile.name": profile.displayName,
                        "authProfile.familyName": profile.name.familyName,
                        "authProfile.givenName": profile.name.givenName,
                        "data.0": initResumeData,
                    })

                    done(null, newUser)
                }
            } catch (error) {
                console.log("error", error)
                done(error, null)
            }
        }
    )
)

/**
 * @todo add only id, not whole user object
 */
passport.serializeUser((user, done) => {
    console.log("serializeUser", user)
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id)

    if (user) {
        console.log("deserializeUser", user)

        done(null, user)
    } else {
        console.log("deserializeUser", "user not found")
        done(null, false)
    }
})
