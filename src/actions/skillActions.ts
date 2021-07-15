import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
    ADD_KEYWORD,
    ADD_SKILL,
    IAddSkillAction,
    IResumeAction,
    IResumeData,
    ISkill,
    ISkillAction,
    ISkillKeywordAction,
    REMOVE_KEYWORD,
    UPDATE_RESUME_DATA,
} from "../schema";

export const updateResumeData = (
    stateObj: IResumeData
): ThunkAction<void, RootState, null, IResumeAction> => {
    return async (dispatch) => {
        try {
            dispatch({
                type: UPDATE_RESUME_DATA,
                payload: stateObj,
            });
        } catch (error) {}
    };
};

//Action Builder
export const addKeyword = (
    skillName: string,
    keywordText: string
): ThunkAction<void, RootState, null, ISkillKeywordAction> => {
    return async (dispatch) => {
        dispatch({
            type: ADD_KEYWORD,
            payload: {
                skillName,
                keywordText,
            },
        });
    };
};

export const removeKeyword = (
    skillName: string,
    keywordText: string
): ThunkAction<void, RootState, null, ISkillKeywordAction> => {
    return async (dispatch) => {
        dispatch({
            type: REMOVE_KEYWORD,
            payload: {
                skillName,
                keywordText,
            },
        });
    };
};

export const addSkill = (
    skillObj: ISkill
): ThunkAction<void, RootState, null, IAddSkillAction> => {
    return async (dispatch) => {
        dispatch({
            type: ADD_SKILL,
            payload: {
                keywords: ["hah", "loll"],
                name: "Expertise",
            },
        });
    };
};


