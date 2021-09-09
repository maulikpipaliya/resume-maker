import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { IResumeData, ISkill } from "../schema"

import {
    ISkillAction,
    SkillActionType,
} from "../schema/action-types/ISkillAction"
import { ResumeDataActionTypes } from "./../schema/action-types/IGetResumeDataAction"
import { IResumeAction } from "../schema/action-types/IGetResumeDataAction"

export const updateResumeData = (
    stateObj: IResumeData
): ThunkAction<void, RootState, null, IResumeAction> => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ResumeDataActionTypes.UPDATE_RESUME_DATA,
                payload: stateObj,
            })
        } catch (error) {}
    }
}

//Action Creator
export const addKeywordInName = (
    name: string,
    keyword: string
): ThunkAction<void, RootState, null, ISkillAction> => {
    return async (dispatch) => {
        dispatch({
            type: SkillActionType.ADD_KEYWORD,
            payload: {
                name,
                keyword,
            },
        })
    }
}

export const removeKeyword = (
    name: string,
    keyword: string
): ThunkAction<void, RootState, null, ISkillAction> => {
    return async (dispatch) => {
        dispatch({
            type: SkillActionType.DELETE_KEYWORD,
            payload: {
                name,
                keyword,
            },
        })
    }
}

export const addSkill = (
    skillObj: ISkill
): ThunkAction<void, RootState, null, ISkillAction> => {
    return async (dispatch) => {
        dispatch({
            type: SkillActionType.ADD_SKILL,
            payload: skillObj,
        })
    }
}
