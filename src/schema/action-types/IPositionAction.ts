import { IPosition } from "../../schema"

export enum PositionActionType {
    UPDATE_POSITION_BY_INDEX = "UPDATE_POSITION_BY_INDEX",
    UPDATE_POSITIONS = "UPDATE_POSITIONS",
    ADD_POSITION = "ADD_POSITION",
    DELETE_POSITION = "DELETE_POSITION",
    RESET_POSITIONS = "RESET_POSITIONS",
}

interface IResetPosotionsAction {
    type: PositionActionType.RESET_POSITIONS
}

interface IUpdatePositionByIndexAction {
    type: PositionActionType.UPDATE_POSITION_BY_INDEX
    payload: {
        idx: number
        recordToUpdate: IPosition
    }
}

interface IUpdatePositionsAction {
    type: PositionActionType.UPDATE_POSITIONS
    payload: IPosition[]
}

interface IAddPositionAction {
    type: PositionActionType.ADD_POSITION
    payload: IPosition
}

interface IDeletePositionAction {
    type: PositionActionType.DELETE_POSITION
    payload: number
}

export type IPositionAction =
    | IUpdatePositionByIndexAction
    | IUpdatePositionsAction
    | IAddPositionAction
    | IDeletePositionAction
    | IResetPosotionsAction
