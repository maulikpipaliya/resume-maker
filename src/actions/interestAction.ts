import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"

import { IInterest } from "./../schema"
import {
    InterestActionType,
    IInterestAction,
} from "./../schema/action-types/IInterestAction"

export const addInterest = (
    interest: IInterest
): ThunkAction<void, RootState, null, IInterestAction> => {
    return async (dispatch) => {
        dispatch({
            type: InterestActionType.ADD_INTEREST,
            payload: interest,
        })
    }
}
