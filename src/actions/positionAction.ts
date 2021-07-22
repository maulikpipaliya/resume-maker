import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { IPosition } from "../schema";
import {
    PositionActionType,
    IPositionAction,
} from "../schema/action-types/IPositionAction";

export const addPosition = (
    positionObj: IPosition
): ThunkAction<void, RootState, null, IPositionAction> => {
    return async (dispatch) => {
        dispatch({
            type: PositionActionType.ADD_POSITION,
            payload: positionObj,
        });
    };
};

export const deletePosition = (
    title: string
): ThunkAction<void, RootState, null, IPositionAction> => {
    return async (dispatch) => {
        dispatch({
            type: PositionActionType.DELETE_POSITION,
            payload: {
                title,
            },
        });
    };
};
