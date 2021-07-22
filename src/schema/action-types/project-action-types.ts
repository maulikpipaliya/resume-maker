import { IProject } from "../project-schema";

export enum ProjectActionType {
    ADD_PROJECT = "ADD_PROJECT",
    UPDATE_PROJECT = "UPDATE_PROJECT",
    DELETE_PROJECT = "DELETE_PROJECT",
    GET_PROJECTS = "GET_PROJECTS",
    GET_PROJECT_BY_INDEX = "GET_PROJECT_BY_INDEX",
    GET_PROJECT_BY_NAME = "GET_PROJECT_BY_NAME",
    RESET_PROJECTS = "RESET_PROJECTS",
}

interface IAddProjectAction {
    type: ProjectActionType.ADD_PROJECT;
    payload: IProject;
}

interface IUpdateProjectAction {
    type: ProjectActionType.UPDATE_PROJECT;
    payload: IProject;
}

interface IDeleteProjectAction {
    type: ProjectActionType.DELETE_PROJECT;
    payload: string;
}

interface IGetProjectsAction {
    type: ProjectActionType.GET_PROJECTS;
}

interface IGetProjectByIndexAction {
    type: ProjectActionType.GET_PROJECT_BY_INDEX;
    payload: number;
}

interface IGetProjectByNameAction {
    type: ProjectActionType.GET_PROJECT_BY_NAME;
    payload: string;
}

interface IResetProjectsAction {
    type: ProjectActionType.RESET_PROJECTS;
}


export type IProjectAction =
    | IAddProjectAction
    | IUpdateProjectAction
    | IDeleteProjectAction
    | IGetProjectsAction
    | IGetProjectByIndexAction
    | IGetProjectByNameAction
    | IResetProjectsAction;
    
