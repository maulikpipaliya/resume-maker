import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { IPosition } from "../schema"
import { Dispatch } from "redux"
import {
    PositionActionType,
    IPositionAction,
} from "../schema/action-types/IPositionAction"

export const addPosition = (
    positionObj: IPosition
): ThunkAction<void, RootState, null, IPositionAction> => {
    return async (dispatch) => {
        dispatch({
            type: PositionActionType.ADD_POSITION,
            payload: positionObj,
        })
    }
}

// export const deletePosition = (
//     title: string
// ): ThunkAction<void, RootState, null, IPositionAction> => {
//     return async (dispatch) => {
//         dispatch({
//             type: PositionActionType.DELETE_POSITION,
//             payload: title,
//         })
//     }
// }

export const deletePosition =
    (idx: number) => (dispatch: Dispatch<IPositionAction>) => {
        dispatch({
            type: PositionActionType.DELETE_POSITION,
            payload: idx,
        })
    }
export const updatePositionAtIndex =
    (idx: number, position: IPosition) =>
    (dispatch: Dispatch<IPositionAction>) => {
        dispatch({
            type: PositionActionType.UPDATE_POSITION_BY_INDEX,
            payload: { idx, recordToUpdate: position },
        })
    }

export const updatePositions = (
    positionList: IPosition[]
): ThunkAction<void, RootState, null, IPositionAction> => {
    return async (dispatch) => {
        dispatch({
            type: PositionActionType.UPDATE_POSITIONS,
            payload: positionList,
        })
    }
}
