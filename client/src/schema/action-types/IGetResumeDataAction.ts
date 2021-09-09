import { IResumeData } from "../../schema"

export enum ResumeDataActionTypes {
    UPDATE_RESUME_DATA = "UPDATE_RESUME_DATA",
}

interface IGetResumeDataAction {
    type: typeof ResumeDataActionTypes.UPDATE_RESUME_DATA
    payload: IResumeData
}

export type IResumeAction = IGetResumeDataAction
