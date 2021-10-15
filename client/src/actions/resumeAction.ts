import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { IResumeData } from "../schema"
import { ResumeDataActionTypes } from "../schema/action-types/IGetResumeDataAction"
import { IResumeAction } from "../schema/action-types/IGetResumeDataAction"
import {
    IResumeIdxAction,
    ResumeIdxActionType,
} from "../schema/action-types/ResumeIdxAction"

export const updateResumeData = (
    stateObj: IResumeData
): ThunkAction<void, RootState, null, IResumeAction> => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ResumeDataActionTypes.UPDATE_RESUME_DATA,
                payload: stateObj,
            })
        } catch (error) {}
    }
}

export const setResumeIdx = (
    idx: number
): ThunkAction<void, RootState, null, IResumeIdxAction> => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ResumeIdxActionType.UPDATE_RESUME_IDX,
                payload: idx,
            })
        } catch (error) {}
    }
}
