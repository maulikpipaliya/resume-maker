import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { IAuth } from "../schema"
import { Dispatch } from "redux"
import { AuthActionType, IAuthAction } from "../schema/action-types/IAuthAction"

export const updateAuth =
    (authData: IAuth) => (dispatch: Dispatch<IAuthAction>) => {
        dispatch({
            type: AuthActionType.UPDATE_AUTH,
            payload: authData,
        })
    }

export const resetAuth = () => (dispatch: Dispatch<IAuthAction>) => {
    dispatch({
        type: AuthActionType.RESET_AUTH,
    })
}
