import React, { useEffect, useState } from "react"
import GoogleLogin, { GoogleLogout } from "react-google-login"

import { config } from "../config"
import axios from "axios"

import "./GoogleButton.css"
import { resetAuth, updateAuth } from "../actions/authAction"
import { useDispatch } from "react-redux"
import { IAuth } from "../schema"
import { refreshToken } from "../utils/refreshToken"
import {
    getTicketFromLocalStorage,
    removeFromLS,
    setToLS,
} from "../utils/utils"
import { initAuthData } from "../schema/initResumeData"

/**
 *
 * @param {String} responseTokenId
 */

const verifyAtServer = async (tokenId: string) => {
    const serverVerification = await axios.post(
        `${config.serverURL}/api/auth/login`,
        {},
        {
            headers: {
                Authorization: `Bearer ${tokenId}`,
            },
        }
    )

    if (serverVerification.data.success) {
        const { name, exp, authEmail, picture, tokenId } =
            serverVerification.data
        const userAuthData: IAuth = {
            authEmail,
            name,
            picture,
            tokenId,
            exp,
        }
        return userAuthData
    }
    return null
}

const GoogleLoginComponent = () => {
    const dispatch = useDispatch()

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [authData, setAuthData] = useState(initAuthData)

    const fillAuthData = (authData: IAuth) => {
        setAuthData(authData)
        setIsAuthenticated(true)
        dispatch(updateAuth(authData))
    }

    const emptyAuthData = () => {
        setAuthData(initAuthData)
        setIsAuthenticated(false)
        dispatch(resetAuth())
    }

    const authenticateUser = async () => {
        const loggedIn = await alreadyLoggedIn()
        if (!loggedIn) emptyAuthData()

        if (loggedIn) {
            const userAuthData: IAuth = loggedIn
            fillAuthData(userAuthData)
            console.info("User already has valid token")
        }
    }

    const alreadyLoggedIn = async () => {
        console.log("Checking if user already has valid token")

        let localTicket = getTicketFromLocalStorage()

        if (localTicket) {
            const userAuthData = await verifyAtServer(localTicket.tokenId)
            if (userAuthData) return userAuthData
        }

        console.log("User needs to login again")

        return null
    }

    const googleLoginSuccess = async (googleLoginResponse: any) => {
        const serverVerifiedToken = await verifyAtServer(
            googleLoginResponse.tokenId
        )

        refreshToken(googleLoginResponse)

        if (serverVerifiedToken) {
            const userAuthData = serverVerifiedToken

            setToLS("gt", userAuthData)

            fillAuthData(userAuthData)

            console.info("User has logged in successfully")
        } else {
            console.log("Unable to login")
            console.log("Server couldn't verify the token")
        }
    }

    const logoutHandler = () => {
        removeFromLS("gt")
        emptyAuthData()
    }

    useEffect(() => {
        if (!isAuthenticated) {
            authenticateUser()
        }
        return () => {}
    })

    return (
        <div>
            {!isAuthenticated && (
                <GoogleLogin
                    clientId={config.googleClientId}
                    cookiePolicy="single_host_origin"
                    scope="profile email"
                    onSuccess={googleLoginSuccess}
                    onFailure={(error) => {
                        console.log(error)
                    }}
                    render={(renderProps) => (
                        <div className="row p-2 py-3">
                            <a
                                className="mx-2 pt-1 rm-google-button p-1 px-3"
                                href="/users/googleauth"
                                role="button"
                                style={{ textTransform: "none" }}
                                onClick={renderProps.onClick}
                            >
                                <img
                                    width="20px"
                                    className="mr-3 color-white"
                                    style={{
                                        marginBottom: "3px",
                                        marginRight: "5px",
                                    }}
                                    alt="ha"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                                />
                                Login with Google
                            </a>
                        </div>
                    )}
                />
            )}

            {isAuthenticated && (
                <>
                    <div className="row p-2 py-3">Hello {authData?.name}</div>

                    <GoogleLogout
                        clientId={config.googleClientId}
                        buttonText="Logout"
                        onLogoutSuccess={logoutHandler}
                    />
                </>
            )}
        </div>
    )
}

export default GoogleLoginComponent
