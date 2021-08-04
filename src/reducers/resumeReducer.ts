import {
    IResumeAction,
    ResumeDataActionTypes,
} from "./../schema/action-types/IGetResumeDataAction"

import { IResumeDataState } from "../schema/state/IResumeDataState"

const initialState: IResumeDataState = {
    data: {
        basics: {
            name: "",
            picture: "",
            email: [""],
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
            contact: [],
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
        education: [],
        skills: [
            {
                name: "",
                level: "",
                keywords: [],
            },
        ],
    },
    loading: false,
    error: "",
}

export const resumeReducer = (
    state = initialState,
    action: IResumeAction
): IResumeDataState => {
    switch (action.type) {
        case ResumeDataActionTypes.UPDATE_RESUME_DATA: {
            return {
                ...state,
                data: action.payload,
                error: "",
                loading: false,
            }
        }
        default:
            return state
    }
}
