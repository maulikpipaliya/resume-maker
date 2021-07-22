import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { IAward } from "../schema";
import {
    AwardActionType,
    IAwardAction,
} from "../schema/action-types/IAwardAction";

export const addAward = (
    awardObj: IAward
): ThunkAction<void, RootState, null, IAwardAction> => {
    return async (dispatch) => {
        dispatch({
            type: AwardActionType.ADD_AWARD,
            payload: awardObj,
        });
    };
};

export const removeAward = (
    awardObj: IAward
): ThunkAction<void, RootState, null, IAwardAction> => {
    return async (dispatch) => {
        dispatch({
            type: AwardActionType.DELETE_AWARD,
            payload: awardObj,
        });
    };
};
