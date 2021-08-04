import { IResumeData } from "../../schema"

export interface IResumeDataState {
    data: IResumeData
    loading: boolean
    error: string
}
