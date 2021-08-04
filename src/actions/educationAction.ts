import { Dispatch } from "redux"

import { IEducation } from "../schema"
import {
    EducationActionType,
    IEducationAction,
} from "../schema/action-types/IEducationAction"

export const addEducation =
    (education: IEducation) => (dispatch: Dispatch<IEducationAction>) => {
        dispatch({
            type: EducationActionType.ADD_EDUCATION,
            payload: education,
        })
    }

export const deleteEducation =
    (idx: number) => (dispatch: Dispatch<IEducationAction>) => {
        dispatch({
            type: EducationActionType.DELETE_EDUCATION,
            payload: idx,
        })
    }

export const updateEducation =
    (educationList: IEducation[]) => (dispatch: Dispatch<IEducationAction>) => {
        dispatch({
            type: EducationActionType.UPDATE_EDUCATION,
            payload: educationList,
        })
    }

export const updateEducationAtIndex =
    (index: number, education: IEducation) =>
    (dispatch: Dispatch<IEducationAction>) => {
        dispatch({
            type: EducationActionType.UPDATE_EDUCATION_AT_INDEX,
            payload: { index, education },
        })
    }
