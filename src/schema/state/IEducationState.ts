import { IEducation } from "../../schema"

export interface IEducationState {
    data: IEducation[]
    error?: string | null
    loading: boolean
    message?: string | null
}
