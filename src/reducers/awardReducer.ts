import { ADD_AWARD, IAwardAction, IAwardState, REMOVE_AWARD } from '../schema'

const initialAwardState: IAwardState = {
    data: [{ title: '' }],
    error: '',
}

export const awardReducer = (
    state = initialAwardState,
    action: IAwardAction
) => {
    switch (action.type) {
        case ADD_AWARD:
            return { ...state, data: [...state.data, action.payload] }

        case REMOVE_AWARD:
            const indexOfTitle: number = state.data.findIndex(
                (item) => item.title === action.payload.title
            )
            console.log(indexOfTitle)
            if (indexOfTitle !== -1) {
                const awardToRemove = state.data.splice(indexOfTitle, 1)
                return {
                    ...state,
                    data: [
                        ...state.data.filter(
                            (award) => award !== awardToRemove[0]
                        ),
                    ],
                }
            } else {
                return state
            }

        default:
            return state
    }
}
