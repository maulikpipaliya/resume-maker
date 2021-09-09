import { JSDocNullableType } from "typescript"

export interface IProject {
    name: string
    guide?: string
    startDate?: Date | null
    endDate?: Date | null
    website?: string
    summary: string
    teamSize?: number
}

export interface ISkill {
    name: string
    level?: string
    keywords: string[]
}

export interface IAward {
    title: string
    date?: Date
    awarder?: string
    summary?: string
}

export interface ILocation {
    address?: string
    postalCode?: string
    city?: string
    countryCode?: string
    region?: string
}

export interface IProfile {
    network?: string
    username?: string
    url?: string
}

export interface IBasic {
    name: string
    picture?: string
    dob?: Date | null
    email: string[]
    website?: string[]
    summary?: string
    location?: ILocation
    profile?: IProfile[]
    contact?: string[]
}

export interface IWork {
    company: string
    position: string
    website?: string
    startDate?: Date | null
    endDate?: Date | null
    summary: string
    highlights: string[]
}

export interface IVolunteer {
    organization: string
    position: string
    website: string
    startDate: Date
    endDate: Date
    summary: string
    highlights: string[]
}

export interface IEducation {
    institution: string
    area?: string
    studyType?: string
    startYear?: number | null
    endYear?: number | null
    gpa: number | null
    courses?: string[]
    degree: string
}

export interface ILanguage {
    language: string
    fluency: string
}

// export interface IInterest {
//     name: string
//     keywords: string[]
// }

export interface IReference {
    name: string
    reference: string
}

export interface IPosition {
    title: string
    organization?: string
    summary?: string
}

//Main interface

export interface IResumeData {
    basics: IBasic
    work: IWork[]
    volunteer?: IVolunteer[]
    education: IEducation[]
    awards?: IAward[]
    projects?: IProject[]
    skills: ISkill[]
    interests?: string[]
    references?: IReference[]
    positions?: IPosition[]
}
