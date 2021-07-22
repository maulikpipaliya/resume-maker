import {
    ProjectActionType,
    IProjectAction,
} from "../schema/action-types/IProjectAction";
import { Dispatch } from "redux";

import { IProject } from "../schema";

export const addProject =
    (project: IProject) => (dispatch: Dispatch<IProjectAction>) => {
        dispatch({
            type: ProjectActionType.ADD_PROJECT,
            payload: project,
        });
    };

export const deleteProject =
    (projectName: string) => (dispatch: Dispatch<IProjectAction>) => {
        dispatch({
            type: ProjectActionType.DELETE_PROJECT,
            payload: projectName,
        });
    };
