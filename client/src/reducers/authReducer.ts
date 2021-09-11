import { IAuthAction, AuthActionType } from "../schema/action-types/IAuthAction"
import { IAuthState } from "../schema/state/IAuthState"

const initialAuthState: IAuthState = {
    data: {
        authEmail: "",
        isAuthenticated: false,
        name: "",
        picture: "",
        tokenId: "",
    },
    error: "",
    message: "",
}

export const authReducer = (
    state = initialAuthState,
    action: IAuthAction
): IAuthState => {
    switch (action.type) {
        case AuthActionType.RESET_AUTH:
            return {
                ...state,
                data: initialAuthState.data,
                message: "AUTH_HAS_BEEN_RESET",
            }

        case AuthActionType.UPDATE_AUTH:
            console.log("UPDATE_AUTH", action.payload)
            const authCopy = state.data
            return {
                ...state,
                data: {
                    ...authCopy,
                    ...action.payload,
                },
            }

        default:
            return state
    }
}
