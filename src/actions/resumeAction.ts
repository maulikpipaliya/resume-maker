import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { UPDATE_RESUME_DATA, IResumeAction, IResumeData } from "../schema";

export const updateResumeData = (
    stateObj: IResumeData
): ThunkAction<void, RootState, null, IResumeAction> => {
    return async (dispatch) => {
        try {
            dispatch({
                type: UPDATE_RESUME_DATA,
                payload: stateObj,
            });
        } catch (error) {}
    };
};
