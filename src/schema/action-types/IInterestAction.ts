import { IInterest } from "../../schema";

export enum InterestActionType {
    ADD_INTEREST = "ADD_INTEREST",
    DELETE_INTEREST = "DELETE_INTEREST",
    UPDATE_INTEREST = "UPDATE_INTEREST",
}

interface IAddInterestAction {
    type: InterestActionType.ADD_INTEREST;
    payload: IInterest;
}

interface IDeleteInterestAction {
    type: InterestActionType.DELETE_INTEREST;
    payload: {
        name: string;
    };
}

interface IUpdateInterestAction {
    type: InterestActionType.UPDATE_INTEREST;
    payload: {
        interest: IInterest;
    };
}

export type IInterestAction =
    | IAddInterestAction
    | IDeleteInterestAction
    | IUpdateInterestAction;
