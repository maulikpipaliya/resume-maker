import { IResumeDataState, IResumeAction, UPDATE_RESUME_DATA } from "./../schema";

const initialState: IResumeDataState = {
    data: {
        basics: {
            name: "",
            picture: "",
            email: [""],
            phone: [""],
            website: [""],
            summary: "",
            location: {
                address: "",
                postalCode: "",
                city: "",
                countryCode: "",
                region: "",
            },
            profile: [
                {
                    network: "",
                    username: "",
                    url: "",
                },
            ],
        },
        work: [
            {
                company: "",
                position: "",
                website: "",
                summary: "",
                highlights: [""],
            },
        ],
        education: [
            {
                institution: "University",
                area: "Software Development",
                studyType: "Bachelor",
                gpa: 4.0,
                courses: ["DB1101 - Basic SQL"],
            },
        ],
        skills: [
            {
                name: "",
                level: "",
                keywords: [""],
            },
        ],
    },
    loading: false,
    error: "",
};

const resumeReducer = (
    state = initialState,
    action: IResumeAction
): IResumeDataState => {
    switch (action.type) {
        case UPDATE_RESUME_DATA: {
            return {
                ...state, 
                data: action.payload,
                error: "",
                loading: false,
            };
        }
        default:
            return state;
    }
};

export default resumeReducer;
