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
            const alldata = [...state.data]
            if (
                alldata.length <= action.payload.idx ||
                action.payload.idx < 0
            ) {
                return { ...state, error: "Invalid Index" }
            } else {
                alldata[action.payload.idx] = action.payload.updaterecord
                return { ...state, data: alldata }
            }

        case WorkActionType.ADD_WORK:
            return {
                ...state,
                data: [...state.data, action.payload],
                error: null,
                message: "Data succesfully added",
            }
        case WorkActionType.DELETE_WORK:
            const ids = state.data.map((work) => work.id)
            if (!ids.includes(action.payload)) {
                return {
                    ...state,
                    error: WorkActionErrors.WRONG_ID,
                }
            } else {
                return {
                    ...state,
                    data: state.data.filter(
                        (work) => work.id !== action.payload
                    ),
                    message: `Work Experience Record at index ${action.payload} succesfully deleted`,
                }
            }
        default:
            return state
    }
}
