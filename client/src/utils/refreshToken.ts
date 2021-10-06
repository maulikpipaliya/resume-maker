import { GoogleLoginResponse } from "react-google-login"
import { updateTokenInLocalStorage } from "./utils"

/**
 * Refreshes the token in local storage
 * @param res accepts google Login Success Response
 */
export const refreshToken = async (response: GoogleLoginResponse) => {
    //time to renew access token

    const mins50  =  50 * 60 * 1000
    //50 minutes in milliseconds
    let refreshIn = 0
    // refreshIn = 50 * 60 * 1000 // 50mins
    refreshIn = 20000 // 20sec

    console.log("Refreshing token")
    let expiresIn = (response.tokenObj.expires_in * 1000 || mins50)

    localStorage.setItem("refreshTokenCalled", JSON.stringify(new Date()))

    const doRefresh = async () => {
        console.log("doRefresh called at ", new Date())
        const newAuthResponse = await response.reloadAuthResponse()
        expiresIn = (newAuthResponse.expires_in || 3600 - 5 * 60) * 1000

        localStorage.setItem("lastRefreshed", JSON.stringify(new Date()))
        updateTokenInLocalStorage(newAuthResponse.id_token)

        setTimeout(() => {
            doRefresh()
        }, refreshIn)
    }

    setTimeout(() => {
        doRefresh()
    }, refreshIn)
}
