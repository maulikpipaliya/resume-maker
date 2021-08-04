import { IBasic } from "../../schema"

export interface IBasicState {
    data: IBasic
    error?: string | null
    loading: boolean
    message?: string | null
}
