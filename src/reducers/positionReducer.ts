import {
    IPositionAction,
    PositionActionType,
} from "../schema/action-types/IPositionAction"
import { IPositionState } from "../schema/state/IPositionState"

const initialPositionState: IPositionState = {
    data: [],
    error: "",
    loading: false,
    message: "",
}

export const positionReducer = (
    state = initialPositionState,
    action: IPositionAction
): IPositionState => {
    switch (action.type) {
        case PositionActionType.RESET_POSITIONS:
            return {
                ...state,
                data: [],
                error: "",
            }
        case PositionActionType.UPDATE_POSITION_BY_INDEX:
            const alldata = [...state.data]
            if (
                alldata.length <= action.payload.idx ||
                action.payload.idx < 0
            ) {
                return { ...state, error: "Invalid Index" }
            } else {
                alldata[action.payload.idx] = action.payload.recordToUpdate
                return { ...state, data: alldata }
            }

        case PositionActionType.UPDATE_POSITIONS:
            const newState = {
                data: action.payload,
                error: "",
                loading: false,
                message: "",
            }
            return newState

        case PositionActionType.ADD_POSITION:
            return { ...state, data: [...state.data, action.payload] }

        case PositionActionType.DELETE_POSITION:
            const idxToDeleteAt = action.payload

            if (idxToDeleteAt < 0 || idxToDeleteAt >= state.data.length)
                return { ...state, error: "Invalid Index" }

            const newData = [...state.data]
            newData.splice(idxToDeleteAt, 1)

            return {
                ...state,
                data: newData,
            }

        default:
            return state
    }
}
