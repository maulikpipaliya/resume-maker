export interface ILocation {
    address: string;
    postalCode: string;
    city: string;
    countryCode?: string;
    region?: string;
}

export interface IProfile {
    network?: string;
    username?: string;
    url?: string;
}

export interface IBasic {
    name: string;
    picture?: string;
    dob?: Date;
    email: string[];
    website?: string[];
    summary?: string;
    location?: ILocation;
    profile?: IProfile[];
    contact?: string[];
}

export interface IWork {
    company: string;
    position: string;
    website: string;
    startDate?: Date;
    endDate?: Date;
    summary: string;
    highlights: string[];
}

export interface IVolunteer {
    organization: string;
    position: string;
    website: string;
    startDate: Date;
    endDate: Date;
    summary: string;
    highlights: string[];
}

export interface IEducation {
    institution: string;
    area: string;
    studyType: string;
    startDate?: Date;
    endDate?: Date;
    gpa: number;
    courses: string[];
}

export interface IAward {
    title: string;
    date?: Date;
    awarder?: string;
    summary?: string;
}

export interface IPublication {
    name: string;
    publisher: string;
    releaseDate: Date;
    website: string;
    summary: string;
}

export interface ISkill {
    name: string;
    level?: string;
    keywords: string[];
}

export interface ILanguage {
    language: string;
    fluency: string;
}

export interface IInterest {
    name: string;
    keywords: string[];
}

export interface IReference {
    name: string;
    reference: string;
}

//Main interface

export interface IResumeData {
    basics: IBasic;
    work: IWork[];
    volunteer?: IVolunteer[];
    education: IEducation[];
    awards?: IAward[];
    publications?: IPublication[];
    skills: ISkill[];
    interests?: IInterest[];
    references?: IReference[];
}

export interface IResumeDataState {
    data: IResumeData;
    loading: boolean;
    error: string;
}

export interface ISkillState {
    data: ISkill[];
    error: string;
}
export interface IAwardState{
    data:IAward[];
    error:string;
}

export interface IResumeDataError {
    errorCode: number;
    message: string;
}

export const UPDATE_RESUME_DATA = "UPDATE_RESUME_DATA";

export const ADD_SKILL = "ADD_SKILL";
export const REMOVE_SKILL = "REMOVE_SKILL";
export const RESET_SKILLS = "RESET_SKILLS";
export const ADD_KEYWORD = "ADD_KEYWORD";
export const REMOVE_KEYWORD = "REMOVE_KEYWORD";
export const RESET_KEYWORD = "RESET_KEYWORD";
export const ADD_AWARD = "ADD_AWARD";
export const REMOVE_AWARD = "REMOVE_AWARD";

interface IUpdateSkillsAction {
    type: typeof ADD_SKILL | typeof REMOVE_SKILL;
    payload: ISkill;
}

export type IAddSkillAction = {
    type: typeof ADD_SKILL;
    payload: ISkill;
};

interface IUpdateAwardsAction{
    type: typeof ADD_AWARD| typeof REMOVE_AWARD;
    payload:IAward;

}
//Action Type

interface IUpdateSkillKeywordsAction {
    type: typeof ADD_KEYWORD | typeof REMOVE_KEYWORD;
    payload: {
        skillName: string;
        keywordText: string;
    };
}

export type ISkillAction = IUpdateSkillsAction | IUpdateSkillKeywordsAction;
export type IAwardAction= IUpdateAwardsAction;
export type ISkillKeywordAction = IUpdateSkillKeywordsAction;
// export type IAddSkillAction = IAddSkillAction;

// action interface
interface IGetResumeDataAction {
    type: typeof UPDATE_RESUME_DATA;
    payload: IResumeData;
}

export type IResumeAction = IGetResumeDataAction;
