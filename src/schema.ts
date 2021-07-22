export interface IProject {
    name: string;
    guide?: string;
    startDate?: Date;
    endDate?: Date;
    website?: string;
    summary: string;
    teamSize?: number;
}


export interface ISkill {
    name: string;
    level?: string;
    keywords: string[];
}

export interface IAward {
    title: string;
    date?: Date;
    awarder?: string;
    summary?: string;
}

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
    projects?: IProject[];
    skills: ISkill[];
    interests?: IInterest[];
    references?: IReference[];
}

export interface IResumeDataState {
    data: IResumeData;
    loading: boolean;
    error: string;
}

export interface IResumeDataError {
    errorCode: number;
    message: string;
}

export const UPDATE_RESUME_DATA = "UPDATE_RESUME_DATA";

// action interface
interface IGetResumeDataAction {
    type: typeof UPDATE_RESUME_DATA;
    payload: IResumeData;
}

export type IResumeAction = IGetResumeDataAction;
