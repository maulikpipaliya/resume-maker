import { ThunkAction } from "redux-thunk"
import { IBasic } from "../schema"
import {
    BasicActionType,
    IBasicAction,
} from "../schema/action-types/IBasicAction"
import { RootState } from "../store"
import axios from "axios"
import { config } from "../config"

export const updateName = (
    newName: string
): ThunkAction<void, RootState, null, IBasicAction> => {
    return async (dispatch) => {
        dispatch({
            type: BasicActionType.UPDATE_NAME,
            payload: newName,
        })
    }
}

export const updateBasics = (
    basicObj: IBasic
): ThunkAction<void, RootState, null, IBasicAction> => {
    return async (dispatch) => {
        dispatch({
            type: BasicActionType.UPDATE_BASICS,
            payload: basicObj,
        })
    }
}

/**
 * @description update the profile in database
 */

export const dbUpdateBasics = async (basicObj: IBasic, authEmail: string) => {
    const res = await axios.put(`${config.serverURL}/api/profile/basics`, {
        basicObj,
        authEmail,
    })

    if (res.status === 200) {
        return {
            success: true,
            message: "Successfully updated the basics",
        }
    }
}

export const resetEmails = (): ThunkAction<
    void,
    RootState,
    null,
    IBasicAction
> => {
    return async (dispatch) => {
        dispatch({
            type: BasicActionType.RESET_EMAIL,
        })
    }
}
