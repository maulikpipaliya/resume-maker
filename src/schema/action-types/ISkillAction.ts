import { ISkill } from "../../schema";

export enum SkillActionType {
    ADD_SKILL = "ADD_SKILL",
    UPDATE_SKILL = "UPDATE_SKILL",
    DELETE_SKILL = "DELETE_SKILL",
    RESET_SKILLS = "RESET_SKILLS",
    ADD_KEYWORD = "ADD_KEYWORD",
    DELETE_KEYWORD = "DELETE_KEYWORD",
    RESET_KEYWORDS = "RESET_KEYWORDS",
}

interface IAddSkillAction {
    type: SkillActionType.ADD_SKILL;
    payload: ISkill;
}

interface IUpdateSkillAction {
    type: SkillActionType.UPDATE_SKILL;
    payload: ISkill;
}

interface IDeleteSkillAction {
    type: SkillActionType.DELETE_SKILL;
    payload: string;
}

interface IResetSkillsAction {
    type: SkillActionType.RESET_SKILLS;
}

interface IAddKeywordAction {
    type: SkillActionType.ADD_KEYWORD;
    payload: {
        name: string;
        keyword: string;
    };
}

interface IRemoveKeywordAction {
    type: SkillActionType.DELETE_KEYWORD;
    payload: {
        name: string;
        keyword: string;
    };
}

interface IResetKeywordsAction {
    type: SkillActionType.RESET_KEYWORDS;
    payload: {
        name: string;
    };
}

export type ISkillAction =
    | IAddSkillAction
    | IUpdateSkillAction
    | IDeleteSkillAction
    | IResetSkillsAction
    | IAddKeywordAction
    | IRemoveKeywordAction
    | IResetKeywordsAction;
