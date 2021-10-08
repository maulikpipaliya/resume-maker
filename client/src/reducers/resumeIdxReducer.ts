import {
    ResumeIdxAction,
    ResumeIdxActionType,
} from "../schema/action-types/ResumeIdxAction"
import { IResumeIdxState } from "../schema/state/IResumeIdxState"

const initialState = {
    resumeIdx: 0,
}

export const resumeIdxReducer = (
    state = initialState,
    action: ResumeIdxAction
): IResumeIdxState => {
    switch (action.type) {
        case ResumeIdxActionType.UPDATE_RESUME_IDX:
            return {
                ...state,
                resumeIdx: action.payload,
            }

        case ResumeIdxActionType.GET_RESUME_IDX:
            return state
        default:
            return state
    }
}
