import { IProjectState } from "../schema/state/IProjectState"
import {
    IProjectAction,
    ProjectActionType,
} from "../schema/action-types/IProjectAction"

const initialProjectState: IProjectState = {
    data: [
        {
            name: "",
            summary: "",
            guide: "",
            website: "",
        },
    ],
    loading: false,
    error: null,
    message: "",
}

export const projectReducer = (
    state = initialProjectState,
    action: IProjectAction
): IProjectState => {
    switch (action.type) {
        case ProjectActionType.UPDATE_PROJECT_BY_INDEX:
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

        case ProjectActionType.UPDATE_PROJECTS:
            const newState = {
                data: action.payload,
                error: "",
                loading: false,
                message: "All Projects are Updated.",
            }
            return newState

        case ProjectActionType.ADD_PROJECT:
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        case ProjectActionType.DELETE_PROJECT:
            const idxToDeleteAt = action.payload

            if (idxToDeleteAt < 0 || idxToDeleteAt >= state.data.length)
                return { ...state, error: "Invalid Index" }

            const newData = [...state.data]
            newData.splice(idxToDeleteAt, 1)

            return {
                ...state,
                data: newData,
            }

        case ProjectActionType.RESET_PROJECTS:
            return {
                ...state,
                data: [],
                message: "All projects are deleted",
            }

        case ProjectActionType.RESET_PROJECT:
            return {
                ...state,
                data: state.data.filter(
                    (project) => project.name !== action.payload
                ),
            }

        default:
            return state
    }
}
