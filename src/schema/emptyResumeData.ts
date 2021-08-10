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
            gpa: null,
            degree: "",
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
