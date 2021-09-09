import { IWork } from "../../schema"

export enum WorkActionType {
    ADD_WORK = "ADD_WORK",
    UPDATE_WORK_BY_INDEX = "UPDATE_WORK_BY_INDEX",
    DELETE_WORK = "DELETE_WORK",
    GET_WORKS = "GET_WORKS",
    GET_WORK_BY_ID = "GET_WORK_BY_ID",
    RESET_WORKS = "RESET_WORKS",
    UPDATE_WORKS = "UPDATE_WORKS",
}

export enum WorkActionErrors {
    WRONG_ID = "Given ID doesn't exist! Please try again with correct parameters",
}
interface IUpdateWorkAction {
    type: WorkActionType.UPDATE_WORKS
    payload: IWork[]
}

interface IAddWorkAction {
    type: WorkActionType.ADD_WORK
    payload: IWork
}

interface IUpdateWorkByIndexAction {
    type: WorkActionType.UPDATE_WORK_BY_INDEX
    payload: {
        idx: number
        workToUpdate: IWork
    }
}

interface IDeleteWorkAction {
    type: WorkActionType.DELETE_WORK
    payload: number
}

interface IGetWorksAction {
    type: WorkActionType.GET_WORKS
}

interface IGetWorkByIDAction {
    type: WorkActionType.GET_WORK_BY_ID
    payload: {
        id: number
    }
}

interface IResetWorksAction {
    type: WorkActionType.RESET_WORKS
}

export type IWorkAction =
    | IAddWorkAction
    | IUpdateWorkByIndexAction
    | IDeleteWorkAction
    | IGetWorksAction
    | IGetWorkByIDAction
    | IResetWorksAction
    | IUpdateWorkAction
