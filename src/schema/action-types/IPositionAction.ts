import { IPosition } from "../../schema";

export enum PositionActionType {
    ADD_POSITION = "ADD_POSITION",
    DELETE_POSITION = "DELETE_POSITION",
    UPDATE_POSITION = "UPDATE_POSITION",
}

interface IAddPositionAction {
    type: PositionActionType.ADD_POSITION;
    payload: IPosition;
}

interface IUpdatePositionAction {
    type: PositionActionType.UPDATE_POSITION;
    payload: IPosition;
}

interface IDeletePositionAction {
    type: PositionActionType.DELETE_POSITION;
    payload: {
        title: string;
    };
}

export type IPositionAction =
    | IAddPositionAction
    | IUpdatePositionAction
    | IDeletePositionAction;
