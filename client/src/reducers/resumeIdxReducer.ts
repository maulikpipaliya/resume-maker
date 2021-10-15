import {
    IResumeIdxAction,
    ResumeIdxActionType,
} from "../schema/action-types/ResumeIdxAction"
// import { IResumeIdxState } from "../schema/state/IResumeIdxState"

const initialState = 0

export const resumeIdxReducer = (
    state = initialState,
    action: IResumeIdxAction
): number => {
    switch (action.type) {
        case ResumeIdxActionType.UPDATE_RESUME_IDX:
            return action.payload
        case ResumeIdxActionType.GET_RESUME_IDX:
            return state
        default:
            return state
    }
}
