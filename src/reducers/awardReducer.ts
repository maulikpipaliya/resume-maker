import {
    IAwardAction,
    AwardActionType,
} from "../schema/action-types/IAwardAction"
import { IAwardState } from "../schema/state/IAwardState"

const initialAwardState: IAwardState = {
    data: [],
    error: "",
}

export const awardReducer = (
    state = initialAwardState,
    action: IAwardAction
): IAwardState => {
    switch (action.type) {
        case AwardActionType.RESET_AWARDS:
            return {
                ...state,
                data: [],
                error: "",
            }

        case AwardActionType.UPDATE_AWARD_AT_INDEX:
            const awardsCopy = [...state.data]

            if (
                awardsCopy.length <= action.payload.idx ||
                action.payload.idx < 0
            ) {
                return { ...state, error: "Invalid Index" }
            } else {
                awardsCopy[action.payload.idx] = action.payload.recordToUpdate
                return { ...state, data: awardsCopy }
            }

        case AwardActionType.UPDATE_AWARDS:
            const newState = {
                data: action.payload,
                error: "",
                loading: false,
                message: "All Awards are Updated.",
            }
            return newState

        case AwardActionType.ADD_AWARD:
            return { ...state, data: [...state.data, action.payload] }

        case AwardActionType.DELETE_AWARD:
            const indexOfTitle = action.payload

            if (indexOfTitle >= state.data.length || indexOfTitle < 0) {
                return { ...state, error: "Invalid Index" }
            } else {
                const awardToRemove = state.data.splice(indexOfTitle, 1)
                return {
                    ...state,
                    data: [
                        ...state.data.filter(
                            (award) => award !== awardToRemove[0]
                        ),
                    ],
                }
            }

        default:
            return state
    }
}
