import { IWork } from "../../schema";

export enum WorkActionType {
    ADD_WORK = "ADD_WORK",
    UPDATE_WORK = "UPDATE_WORK",
    DELETE_WORK = "DELETE_WORK",
    GET_WORKS = "GET_WORKS",
    GET_WORK_BY_ID = "GET_WORK_BY_ID",
    RESET_WORK = "RESET_WORK",
}

export enum WorkActionErrors {
    WRONG_ID = "Given ID doesn't exist! Please try again with correct parameters",
}

interface IAddWorkAction {
    type: WorkActionType.ADD_WORK;
    payload: IWork;
}

interface IUpdateWorkAction {
    type: WorkActionType.UPDATE_WORK;
    payload: {
        id: number;
        work: IWork;
    };
}

interface IDeleteWorkAction {
    type: WorkActionType.DELETE_WORK;
    payload: number;
}

interface IGetWorksAction {
    type: WorkActionType.GET_WORKS;
}

interface IGetWorkByIDAction {
    type: WorkActionType.GET_WORK_BY_ID;
    payload: {
        id: number;
    };
}

interface IResetWorkAction {
    type: WorkActionType.RESET_WORK;
}

export type IWorkAction =
    | IAddWorkAction
    | IUpdateWorkAction
    | IDeleteWorkAction
    | IGetWorksAction
    | IGetWorkByIDAction
    | IResetWorkAction;
