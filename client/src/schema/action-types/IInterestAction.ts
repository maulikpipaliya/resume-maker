// import { IInterest } from "../../schema"

export enum InterestActionType {
    ADD_INTEREST = "ADD_INTEREST",
    DELETE_INTEREST = "DELETE_INTEREST",
    UPDATE_INTEREST = "UPDATE_INTEREST",
}

interface IAddInterestAction {
    type: InterestActionType.ADD_INTEREST
    payload: string
}

interface IDeleteInterestAction {
    type: InterestActionType.DELETE_INTEREST
    payload: string
}

export type IInterestAction =
    | IAddInterestAction
    | IDeleteInterestAction