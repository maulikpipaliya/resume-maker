import { IWorkState } from "../schema/state/IWorkState"
import {
    IWorkAction,
    WorkActionType,
    WorkActionErrors,
} from "../schema/action-types/IWorkAction"

const initialWorkState: IWorkState = {
    data: [],
    error: null,
    loading: false,
    message: "",
}

export const workReducer = (
    state: IWorkState = initialWorkState,
    action: IWorkAction
): IWorkState => {
    var stateDataCopy = [...state.data]
    switch (action.type) {
        case WorkActionType.RESET_WORKS:
            return {
                ...state,
                data: [],
                error: "",
            }
        case WorkActionType.UPDATE_WORKS:
            const newState = {
                data: action.payload,
                error: "",
                loading: false,
                message: "All Work are Updated.",
            }
            return newState
        case WorkActionType.UPDATE_WORK_BY_INDEX:
            const oldState = [...state.data]
            if (
                oldState.length <= action.payload.idx ||
                action.payload.idx < 0
            ) {
                return { ...state, error: "Invalid Index" }
            } else {
                oldState[action.payload.idx] = action.payload.workToUpdate
                return { ...state, data: oldState }
            }

        case WorkActionType.ADD_WORK:
            return {
                ...state,
                data: [...state.data, action.payload],
                error: null,
                message: "Data succesfully added",
            }
        case WorkActionType.DELETE_WORK:
            stateDataCopy = [...state.data]

            if (stateDataCopy.length <= action.payload || action.payload < 0) {
                return { ...state, error: WorkActionErrors.WRONG_ID }
            } else {
                stateDataCopy.splice(action.payload, 1)
                return {
                    ...state,
                    data: stateDataCopy,
                    message: `Work Experience Record at index ${action.payload} succesfully deleted`,
                }
            }
        default:
            return state
    }
}
