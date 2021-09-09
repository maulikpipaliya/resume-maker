import {
    ProjectActionType,
    IProjectAction,
} from "../schema/action-types/IProjectAction"
import { Dispatch } from "redux"

import { IProject } from "../schema"

export const updateProjects =
    (projectList: IProject[]) => (dispatch: Dispatch<IProjectAction>) => {
        dispatch({
            type: ProjectActionType.UPDATE_PROJECTS,
            payload: projectList,
        })
    }

export const updateProjectAtIndex =
    (idx: number, project: IProject) =>
    (dispatch: Dispatch<IProjectAction>) => {
        dispatch({
            type: ProjectActionType.UPDATE_PROJECT_BY_INDEX,
            payload: { idx, recordToUpdate: project },
        })
    }

export const addProject =
    (project: IProject) => (dispatch: Dispatch<IProjectAction>) => {
        dispatch({
            type: ProjectActionType.ADD_PROJECT,
            payload: project,
        })
    }

export const deleteProject =
    (idx: number) => (dispatch: Dispatch<IProjectAction>) => {
        dispatch({
            type: ProjectActionType.DELETE_PROJECT,
            payload: idx,
        })
    }

export const resetAllProjects = () => (dispatch: Dispatch<IProjectAction>) => {
    dispatch({
        type: ProjectActionType.RESET_PROJECTS,
    })
}

export const resetProject =
    (projectName: string) => (dispatch: Dispatch<IProjectAction>) => {
        dispatch({
            type: ProjectActionType.RESET_PROJECT,
            payload: projectName,
        })
    }
