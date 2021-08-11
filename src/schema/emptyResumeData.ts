import { IResumeData } from "../schema"

export const initialLocalResumeData: IResumeData = {
    basics: {
        email: [""],
        name: "",
        contact: [""],
        dob: null,
        location: {
            city: "",
            region: "",
        },
    },
    education: [
        {
            institution: "",
            degree: "",
            gpa: null,
            startYear: null,
            endYear: null,
            area: "",
        },
    ],
    work: [
        {
            company: "",
            position: "",
            summary: "",
            highlights: [],
        },
    ],
    awards: [
        {
            title: "",
        },
    ],
    skills: [
        {
            keywords: [],
            name: "",
        },
    ],
    interests: [],
    positions: [
        {
            title: "",
            organization: "",
        },
    ],
    projects: [
        {
            name: "",
            guide: "",
            summary: "",
        },
    ],
}
