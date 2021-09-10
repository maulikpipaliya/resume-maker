import React, { useEffect, useState } from "react"
import GoogleLogin from "react-google-login"

import { config } from "../config"
import axios from "axios"

import "./GoogleButton.css"

const GoogleLoginComponent = () => {
    const googleClientId: string = config.googleClientId || ""

    interface userProfileType {
        name?: string
        picture?: string
    }
    let localToken = localStorage.getItem("googleTicket")

    const [userProfile, setUserProfile] = useState<userProfileType>()

    const googleLoginSuccess = async (response: any) => {
        console.log(response)
        const tokenId = response.tokenId
        const tokenObj = response.tokenObj
        const profileObj = response.profileObj

        console.log("haha")
        const passToken = await axios.post(
            `${config.serverURL}/api/auth/login`,
            {
                tokenId,
            }
        )

        console.log("passToken")
        console.log(passToken)

        if (passToken.data.success) {
            //store token in cache
            localStorage.setItem(
                "googleTicket",
                JSON.stringify({
                    tokenId: passToken.data.tokenId,
                    name: passToken.data.name,
                    picture: passToken.data.picture,
                })
            )

            setUserProfile({
                name: passToken.data.name,
                picture: passToken.data.picture,
            })
        }

        console.log(tokenId)
        console.log(tokenObj.id_token)
        console.log(profileObj)
    }

    useEffect(() => {
        if (localToken) {
            let ls = JSON.parse(localToken)
            setUserProfile({
                name: ls.name,
                picture: ls.picture,
            })
        }
        return () => {}
    }, [])

    return (
        <div>
            {!localToken && (
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

                        /*<button
                        onClick={renderProps.onClick}
                        className="rm-google-button p-1"
                    >
                        <i className="fab fa-google m-3"></i>
                        Sign in with Google
                    </button> */
                    )}
                />
            )}

            {localToken && (
                <>
                    <div className="row p-2 py-3">
                        Hello {userProfile?.name}
                    </div>
                    {/* <div>
                        <img
                            src={userProfile?.picture}
                            // className="rounded"
                            alt="img"
                            width="100px"
                            height="100px"
                        />
                    </div> */}
                </>
            )}
        </div>
    )
}

export default GoogleLoginComponent
