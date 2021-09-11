import React, { useState } from "react"
import GoogleLogin, { GoogleLogout } from "react-google-login"

import { config } from "../config"
import axios from "axios"

import "./GoogleButton.css"
import { resetAuth, updateAuth } from "../actions/authAction"
import { useDispatch } from "react-redux"
import { IAuth } from "../schema"
import { refreshToken } from "../utils/refreshToken"
import { getTicketFromLocalStorage } from "../utils/utils"

interface userProfileType {
    name?: string
    picture?: string
    tokenId?: string
}

const googleClientId: string = config.googleClientId || ""

const GoogleLoginComponent = () => {
    const dispatch = useDispatch()

    let localTicket = getTicketFromLocalStorage()

    const [userProfile, setUserProfile] = useState<userProfileType>(localTicket)

    const googleLoginSuccess = async (response: any) => {
        console.log(response)

        const { tokenId, profileObj } = response

        const verifyIdToken = await axios.post(
            `${config.serverURL}/api/auth/login`,
            {
                authEmail: profileObj.email,
            },
            {
                headers: { Authorization: `Bearer ${tokenId}` },
            }
        )

        refreshToken(response)

        console.log("passToken")
        console.log(verifyIdToken)

        if (verifyIdToken.data.success) {
            const { tokenId, name, picture, authEmail } = verifyIdToken.data
            //store token in localstorage
            localStorage.setItem(
                "googleTicket",
                JSON.stringify({
                    name,
                    picture,
                    tokenId,
                })
            )

            setUserProfile({
                name,
                picture,
                tokenId,
            })

            const authData: IAuth = {
                authEmail,
                isAuthenticated: true,
                name,
                picture,
                tokenId,
            }

            dispatch(updateAuth(authData))
        }
    }

    const logoutHandler = () => {
        localStorage.removeItem("googleTicket")
        setUserProfile({})
        dispatch(resetAuth())
    }

    return (
        <div>
            {!localTicket && (
                <GoogleLogin
                    clientId={googleClientId}
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

            {localTicket && (
                <>
                    <div className="row p-2 py-3">
                        Hello {userProfile?.name}
                    </div>

                    <GoogleLogout
                        clientId={googleClientId}
                        buttonText="Logout"
                        onLogoutSuccess={logoutHandler}
                    />
                </>
            )}
        </div>
    )
}

export default GoogleLoginComponent
