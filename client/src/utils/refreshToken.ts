import { GoogleLoginResponse } from "react-google-login"

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

        setTimeout(() => {
            doRefresh()
        }, expiresIn)
    }

    setTimeout(() => {
        doRefresh()
    }, expiresIn)
}
