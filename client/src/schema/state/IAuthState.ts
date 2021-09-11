import { IAuth } from "../../schema"

export interface IAuthState {
    data: IAuth
    error?: string
    message?: string
}
