import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"

// import { IInterest } from "./../schema"
import {
    InterestActionType,
    IInterestAction,
} from "./../schema/action-types/IInterestAction"

export const addInterest = (
    interest: string
): ThunkAction<void, RootState, null, IInterestAction> => {
    return async (dispatch) => {
        dispatch({
            type: InterestActionType.ADD_INTEREST,
            payload: interest,
        })
    }
}

export const deleteInterest = (
    interestName: string
): ThunkAction<void, RootState, null, IInterestAction> => {
    return async (dispatch) => {
        dispatch({
            type: InterestActionType.DELETE_INTEREST,
            payload: interestName,
        })
    }
}
