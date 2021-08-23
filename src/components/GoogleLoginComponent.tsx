import React from "react"
import GoogleLogin from "react-google-login"

const GoogleLoginComponent = () => {
    return (
        <div>
            <GoogleLogin
                clientId="274901674610-m338uo0bmreb5ijn9kn17lvjthf6dbv1.apps.googleusercontent.com"
                cookiePolicy="single_host_origin"
                scope="profile email"
                onSuccess={(loginResponse) => {
                    console.log(loginResponse)
                }}
                onFailure={(error) => {
                    console.log(error)
                }}
            />
        </div>
    )
}

export default GoogleLoginComponent
