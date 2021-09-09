import React from "react"
import GoogleLogin from "react-google-login"

import { config } from "../config"

import "./GoogleButton.css"

const GoogleLoginComponent = () => {
    const googleClientId: string = config.googleClientId || ""

    return (
        <div>
            <GoogleLogin
                clientId={googleClientId}
                cookiePolicy="single_host_origin"
                scope="profile email"
                onSuccess={(loginResponse) => {
                    console.log(loginResponse)
                }}
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
        </div>
    )
}

export default GoogleLoginComponent
