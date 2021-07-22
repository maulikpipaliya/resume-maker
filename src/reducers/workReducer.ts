import { IWorkState } from "../schema/state/IWorkState";
import {
    IWorkAction,
    WorkActionType,
    WorkActionErrors,
} from "../schema/action-types/IWorkAction";

const initialWorkState: IWorkState = {
    data: [],
    error: null,
    loading: false,
    message: "",
};

export const workReducer = (
    state: IWorkState = initialWorkState,
    action: IWorkAction
): IWorkState => {
    switch (action.type) {
        case WorkActionType.ADD_WORK:
            return {
                ...state,
                data: [...state.data, action.payload],
                error: null,
                message: "Data succesfully added",
            };
        case WorkActionType.DELETE_WORK:
            const ids = state.data.map((work) => work.id);
            if (!ids.includes(action.payload)) {
                return {
                    ...state,
                    error: WorkActionErrors.WRONG_ID,
                };
            } else {
                return {
                    ...state,
                    data: state.data.filter(
                        (work) => work.id !== action.payload
                    ),
                    message: `Work Experience Record at index ${action.payload} succesfully deleted`,
                };
            }
        case WorkActionType.RESET_WORK:
            return {
                ...state,
                data: [],
                message: "Work Experience records have been reset",
            };
        default:
            return state;
    }
};
