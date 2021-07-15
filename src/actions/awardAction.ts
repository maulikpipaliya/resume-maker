import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'
import { ADD_AWARD, IAward, IAwardAction, REMOVE_AWARD } from '../schema'

export const addAward = (
    awardObj: IAward
): ThunkAction<void, RootState, null, IAwardAction> => {
    return async (dispatch) => {
        dispatch({
            type: ADD_AWARD,
            payload: awardObj,
        })
    }
}

export const removeAward = (
    awardObj: IAward
): ThunkAction<void, RootState, null, IAwardAction> => {
    return async (dispatch) => {
        dispatch({
            type: REMOVE_AWARD,
            payload: awardObj,
        })
    }
}
