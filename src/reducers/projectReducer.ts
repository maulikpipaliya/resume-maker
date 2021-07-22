import { IProjectState } from '../schema/state/IProjectState'
import {
    IProjectAction,
    ProjectActionType,
} from '../schema/action-types/IProjectAction'

const initialProjectState: IProjectState = {
    data: [
        {
            name: '',
            summary: '',
            guide: '',
            website: '',
        },
    ],
    loading: false,
    error: null,
}

export const projectReducer = (
    state = initialProjectState,
    action: IProjectAction
): IProjectState => {
    switch (action.type) {
        case ProjectActionType.ADD_PROJECT:
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        case ProjectActionType.DELETE_PROJECT:
            return {
                ...state,
                data: state.data.filter(
                    (project) => project.name !== action.payload
                ),
            }
        case ProjectActionType.RESET_PROJECTS:
            return {
                ...state,
                data: [],
            }

        default:
            return state
    }
}
