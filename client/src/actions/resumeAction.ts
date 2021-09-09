import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { IResumeData } from "../schema"
import { ResumeDataActionTypes } from "../schema/action-types/IGetResumeDataAction"
import { IResumeAction } from "../schema/action-types/IGetResumeDataAction"

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
