import { IAward, IBasic, IPosition, IProject, ISkill, IWork } from "../schema"
import { IEducation, IResumeData } from "../schema"

export const initBasicDetailObj: IBasic = {
    email: [""],
    name: "",
    contact: [""],
    dob: null,
    location: {
        city: "",
        region: "",
    },
}

export const initEducationObj: IEducation = {
    institution: "",
    degree: "",
    gpa: null,
    startYear: null,
    endYear: null,
    area: "",
}

export const initWorkObj: IWork = {
    company: "",
    position: "",
    summary: "",
    highlights: [],
}

export const initSkillObj: ISkill = {
    keywords: [],
    name: "",
}

export const initAwardObj: IAward = {
    title: "",
}

export const initPositionObj: IPosition = {
    title: "",
    organization: "",
}

export const initProjectObj: IProject = {
    name: "",
    guide: "",
    summary: "",
}

export const initResumeData: IResumeData = {
    basics: initBasicDetailObj,
    education: [],
    work: [],
    awards: [],
    skills: [],
    interests: [],
    positions: [],
    projects: [],
}
