import { ThunkAction } from "redux-thunk"
import { IBasic } from "../schema"
import {
    BasicActionType,
    IBasicAction,
} from "../schema/action-types/IBasicAction"
import { RootState } from "../store"
import axios from "axios"

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

export const dbUpdateBasics = async (basicObj: IBasic) => {
    const res = await axios.put(`/api/profile/basics`, basicObj)
    return res.data
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
