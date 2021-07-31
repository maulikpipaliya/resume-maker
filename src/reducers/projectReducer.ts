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
    message: '',
}

export const projectReducer = (
    state = initialProjectState,
    action: IProjectAction
): IProjectState => {
    switch (action.type) {
        case ProjectActionType.UPDATE_PROJECTS:
            console.log('google')
            console.log(action.payload)
            const newState = {
                data: action.payload,
                error: '',
                loading: false,
                message: 'All Projects are Updated.',
            }
            return newState

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
                message: 'All projects are deleted',
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
