import React, { FC, useEffect, useState } from "react"

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
import { Button } from "react-bootstrap"

const GoogleLoginComponent: FC = () => {
    const dispatch = useDispatch()

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [authData, setAuthData] = useState(initAuthData)

    const [authorizedUser, setAuthorizedUser] = useState({})

    const fillAuthData = (authData: IAuth) => {
        console.log("fillAuthData", authData)
        setAuthData(authData)
        setIsAuthenticated(true)
        dispatch(updateAuth(authData))
    }

    const emptyAuthData = () => {
        setAuthData(initAuthData)
        setIsAuthenticated(false)
        dispatch(resetAuth())
    }

    const getUserData = async (): Promise<IAuth> => {
        const getUserDataURL = `${config.serverURL}/api/auth/getUserData`
        const { data } = await axios.get(getUserDataURL, {
            withCredentials: true,
        })

        if (data.success) {
            console.log("getUserData", data)

            const {
                data: {
                    authProfile: { authEmail, picture, name },
                },
            } = data

            const authData: IAuth = {
                authEmail,
                name,
                picture,
                isLoggedIn: true,
            }

            console.log("authData", authData)

            fillAuthData(authData)

            return authData
        }

        return initAuthData
    }

    const alreadyLoggedIn = async () => {
        console.log("alreadyLoggedIn")
        const userData = await getUserData()

        if (!userData || !userData.isLoggedIn) {
            emptyAuthData()
            return false
        } else {
            return true
        }
    }

    const signInWithGoogle = async () => {
        // const loginURL = `${process.env.REACT_APP_SERVER_URL}/api/auth/`
        console.log("signInWithGoogle called")
        const loginURL = `${process.env.REACT_APP_SERVER_URL}/api/auth/google/login`

        window.open(loginURL, "_self")
    }

    const logoutHandler = async () => {
        console.log("logoutHandler")

        const logoutURL = `${process.env.REACT_APP_SERVER_URL}/api/auth/google/logout`

        const { data } = await axios.get(logoutURL, {
            withCredentials: true,
        })

        if (data.success) emptyAuthData()
    }

    useEffect(() => {
        const isLoggedIn = alreadyLoggedIn()
        if (!isLoggedIn) {
            logoutHandler()
            signInWithGoogle()
        }

        return () => {}
    }, [])

    return (
        <div>
            {!isAuthenticated && (
                <>
                    <div className="row p-2 py-3" onClick={signInWithGoogle}>
                        <div
                            className="mx-2 pt-1 rm-google-button p-1 px-3"
                            role="button"
                            style={{ textTransform: "none" }}
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
                            Sign in with Google
                        </div>
                    </div>
                </>
            )}

            {isAuthenticated && (
                <>
                    <div className="row p-2 py-3">Hello {authData?.name}</div>

                    <Button onClick={logoutHandler}>Logout</Button>
                </>
            )}
        </div>
    )
}

export default GoogleLoginComponent
