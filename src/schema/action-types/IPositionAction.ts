import { IPosition } from "../../schema";

export enum PositionActionType {
    UPDATE_POSITIONS = "UPDATE_POSITIONS",
    ADD_POSITION = "ADD_POSITION",
    DELETE_POSITION = "DELETE_POSITION",
    UPDATE_POSITION = "UPDATE_POSITION",
}

interface IUpdatePositionsAction {
    type: PositionActionType;
    payload: IPosition[];
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
    payload: string;
}

export type IPositionAction =
    | IUpdatePositionsAction
    | IAddPositionAction
    | IUpdatePositionAction
    | IDeletePositionAction;
