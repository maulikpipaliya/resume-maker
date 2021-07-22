import { IAward } from "../../schema";

export enum AwardActionType {
    ADD_AWARD = "ADD_AWARD",
    UPDATE_AWARD = "UPDATE_AWARD",
    DELETE_AWARD = "DELETE_AWARD",
}

interface IAddAwardAction {
    type: AwardActionType.ADD_AWARD;
    payload: IAward;
}

interface IUpdateAwardAction {
    type: AwardActionType.UPDATE_AWARD;
    payload: IAward;
}

interface IDeleteAwardAction {
    type: AwardActionType.DELETE_AWARD;
    payload: {
        title: string
    };
}

export type IAwardAction =
    | IAddAwardAction
    | IUpdateAwardAction
    | IDeleteAwardAction;
