//fitted as per MongoDB Needs

export const IProject = {
    name: String,
    guide: String,
    startDate: String,
    endDate: String,
    website: String,
    summary: String,
    teamSize: Number,
}

export const ISkill = {
    name: String,
    level: String,
    keywords: [String],
}

export const IAward = {
    title: String,
    date: Date,
    awarder: String,
    summary: String,
}

export const ILocation = {
    address: String,
    postalCode: String,
    city: String,
    countryCode: String,
    region: String,
}

export const IProfile = {
    network: String,
    username: String,
    url: String,
}

export const IBasic = {
    name: String,
    picture: String,
    dob: Date | null,
    email: [String],
    website: [String],
    summary: String,
    location: ILocation,
    profile: [IProfile],
    contact: [String],
}

export const IWork = {
    company: String,
    position: String,
    website: String,
    startDate: Date | null,
    endDate: Date | null,
    summary: String,
    highlights: [String],
}

export const IVolunteer = {
    organization: String,
    position: String,
    website: String,
    startDate: Date,
    endDate: Date,
    summary: String,
    highlights: [String],
}

export const IEducation = {
    orderIndex: Number,
    institution: String,
    area: String,
    studyType: String,
    startYear: Number | null,
    endYear: Number | null,
    gpa: Number | null,
    courses: [String],
    degree: String,
}

export const ILanguage = {
    language: String,
    fluency: String,
}

export const IReference = {
    name: String,
    reference: String,
}

export const IPosition = {
    title: String,
    organization: String,
    summary: String,
}

export const IGoogleProfile = {
    googleId: String,
    name: String,
    givenName: String,
    familyName: String,
    picture: String,
    email: String,
}

//Main const

export const IResumeData = {
    resumeIdx: Number,
    resumeTitle: String,
    basics: IBasic,
    work: [IWork],
    volunteer: [IVolunteer],
    education: [IEducation],
    awards: [IAward],
    projects: [IProject],
    skills: [ISkill],
    interests: [String],
    references: [IReference],
    positions: [IPosition],
}
