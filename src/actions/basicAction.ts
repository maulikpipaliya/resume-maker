import { ThunkAction } from "redux-thunk"
import { IBasic } from "../schema"
import {
    BasicActionType,
    IBasicAction,
} from "../schema/action-types/IBasicAction"
import { RootState } from "../store"

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
