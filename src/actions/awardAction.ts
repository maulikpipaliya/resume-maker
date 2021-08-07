import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { IAward } from "../schema"
import { Dispatch } from "redux"
import {
    AwardActionType,
    IAwardAction,
} from "../schema/action-types/IAwardAction"

export const updateAwards =
    (awardList: IAward[]) => (dispatch: Dispatch<IAwardAction>) => {
        dispatch({
            type: AwardActionType.UPDATE_AWARDS,
            payload: awardList,
        })
    }

export const addAward = (
    awardObj: IAward
): ThunkAction<void, RootState, null, IAwardAction> => {
    return async (dispatch) => {
        dispatch({
            type: AwardActionType.ADD_AWARD,
            payload: awardObj,
        })
    }
}

export const deleteAward = (
    idx: number
): ThunkAction<void, RootState, null, IAwardAction> => {
    return async (dispatch) => {
        dispatch({
            type: AwardActionType.DELETE_AWARD,
            payload: idx,
        })
    }
}

export const updateAwardAtIndex = (
    idx: number,
    recordToUpdate: IAward,
): ThunkAction<void, RootState, null, IAwardAction> => {
    return async (dispatch) => {
        dispatch({
            type: AwardActionType.UPDATE_AWARD_AT_INDEX,
            payload: {
                idx,
                recordToUpdate,
            },
        })
    }
}
