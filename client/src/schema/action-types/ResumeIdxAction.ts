export enum ResumeIdxActionType {
    UPDATE_RESUME_IDX = "UPDATE_RESUME_IDX",
    GET_RESUME_IDX = "GET_RESUME_IDX",
}

interface IUpdateResumeIdxAction {
    type: ResumeIdxActionType.UPDATE_RESUME_IDX
    payload: number
}

interface IGetResumeIdxAction {
    type: ResumeIdxActionType.GET_RESUME_IDX
}

export type IResumeIdxAction = IUpdateResumeIdxAction | IGetResumeIdxAction
