import { GoogleLoginResponse } from "react-google-login"
import { updateTokenInLocalStorage } from "./utils"

/**
 *
 * @param res accepts google Login Success Response
 */
export const refreshToken = async (response: GoogleLoginResponse) => {
    //time to renew access token
    let expiresIn = (response.tokenObj.expires_in || 3600 - 5 * 60) * 1000

    const doRefresh = async () => {
        const newAuthResponse = await response.reloadAuthResponse()
        expiresIn = (newAuthResponse.expires_in || 3600 - 5 * 60) * 1000

        localStorage.setItem("lastRefreshed", JSON.stringify(new Date()))
        updateTokenInLocalStorage(newAuthResponse.id_token)

        setTimeout(() => {
            doRefresh()
        }, expiresIn)
    }

    setTimeout(() => {
        doRefresh()
    }, expiresIn)
}
