import { IProject } from "../../schema"

export enum ProjectActionType {
    ADD_PROJECT = "ADD_PROJECT",
    UPDATE_PROJECT_BY_INDEX = "UPDATE_PROJECT_BY_INDEX",
    DELETE_PROJECT = "DELETE_PROJECT",
    GET_PROJECTS = "GET_PROJECTS",
    GET_PROJECT_BY_INDEX = "GET_PROJECT_BY_INDEX",
    GET_PROJECT_BY_NAME = "GET_PROJECT_BY_NAME",
    RESET_PROJECTS = "RESET_PROJECTS",
    RESET_PROJECT = "RESET_PROJECT",
    UPDATE_PROJECTS = "UPDATE_PROJECTS",
}

interface IUpdateProjectsAction {
    type: ProjectActionType.UPDATE_PROJECTS
    payload: IProject[]
}

interface IAddProjectAction {
    type: ProjectActionType.ADD_PROJECT
    payload: IProject
}

interface IUpdateProjectByIndexAction {
    type: ProjectActionType.UPDATE_PROJECT_BY_INDEX
    payload: {
        idx: number
        recordToUpdate: IProject
    }
}

interface IDeleteProjectAction {
    type: ProjectActionType.DELETE_PROJECT
    payload: number
}

interface IGetProjectsAction {
    type: ProjectActionType.GET_PROJECTS
}

interface IGetProjectByIndexAction {
    type: ProjectActionType.GET_PROJECT_BY_INDEX
    payload: number
}

interface IGetProjectByNameAction {
    type: ProjectActionType.GET_PROJECT_BY_NAME
    payload: string
}

interface IResetProjectsAction {
    type: ProjectActionType.RESET_PROJECTS
}

interface IResetProjectAction {
    type: ProjectActionType.RESET_PROJECT
    payload: string
}

export type IProjectAction =
    | IAddProjectAction
    | IUpdateProjectByIndexAction
    | IDeleteProjectAction
    | IGetProjectsAction
    | IGetProjectByIndexAction
    | IGetProjectByNameAction
    | IResetProjectsAction
    | IResetProjectAction
    | IUpdateProjectsAction
