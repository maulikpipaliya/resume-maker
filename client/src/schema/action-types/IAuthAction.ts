import { IAuth } from "../../schema"

export enum AuthActionType {
    UPDATE_AUTH = "UPDATE_AUTH",
    RESET_AUTH = "RESET_AUTH",
}

interface IResetAuth {
    type: AuthActionType.RESET_AUTH
}

interface IUpdateAuth {
    type: AuthActionType.UPDATE_AUTH
    payload: IAuth
}

export type IAuthAction = IResetAuth | IUpdateAuth
