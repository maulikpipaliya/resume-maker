import {
    IBasicAction,
    BasicActionType,
    BasicActionSuccess,
    BasicActionErrors,
} from "../schema/action-types/IBasicAction"
import { IBasicState } from "../schema/state/IBasicState"
import { initResumeData } from "../schema/initResumeData"
import {
    getDataFromLS,
    updateLocalStorageByProperty,
} from "./localStorageReducer"
import axios from "axios"
import { serverURLs } from "../config"
import { resumeIdxReducer } from "./resumeIdxReducer"

import store from "../store"
import { IBasic } from "../schema"

// const resumeIdx: number = store.getState().resumeIdx.resumeIdx

let initialBasicData = getDataFromLS("basics")

initialBasicData =
    Object.keys(initialBasicData).length === 0
        ? initResumeData.basics
        : initialBasicData

const initialBasicState: IBasicState = {
    data: initialBasicData,
    loading: false,
    error: null,
    message: null,
}

export const basicReducer = (
    state: IBasicState = initialBasicState,
    action: IBasicAction
) => {
    switch (action.type) {
        case BasicActionType.UPDATE_BASICS_FROM_DB:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
                message: null,
            }

        case BasicActionType.UPDATE_BASICS:
            updateLocalStorageByProperty("basics", action.payload)

            return {
                ...state,
                data: action.payload,
                message: BasicActionSuccess.BASICS_UPDATED,
                error: null,
            }
        case BasicActionType.UPDATE_NAME:
            return {
                ...state,
                data: {
                    ...state.data,
                    name: action.payload,
                },
                message: "NAME_UPDATED",
                error: null,
            }

        case BasicActionType.ADD_EMAIL:
            return {
                ...state,
                data: {
                    ...state.data,
                    email: [...state.data.email, action.payload],
                },
                error: null,
                message: BasicActionSuccess.EMAIL_ADDED,
            }
        case BasicActionType.DELETE_EMAIL:
            const emails = state.data.email.map((email) => email)
            if (emails.indexOf(action.payload) === -1) {
                return {
                    ...state,
                    error: BasicActionErrors.EMAIL_NOT_FOUND,
                    message: null,
                }
            } else {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        email: state.data.email.filter(
                            (email: string) => email !== action.payload
                        ),
                    },
                    message: BasicActionSuccess.EMAIL_DELETED,
                    error: null,
                }
            }
        case BasicActionType.ADD_PROFILE:
            const newProfiles = state.data.profile?.concat(action.payload)

            return {
                ...state,
                data: {
                    ...state.data,
                    profile: newProfiles,
                },
                error: null,
                message: "New profile has been added",
            }
        case BasicActionType.RESET_EMAIL:
            return {
                ...state,
                data: {
                    ...state.data,
                    email: [],
                },
                error: null,
                message: "EMAIL_RESET",
            }
        case BasicActionType.RESET_EMAIL_BY_INDEX:
            const newEmails = [...state.data.email]
            if (action.payload < newEmails.length)
                newEmails[action.payload] = ""

            return {
                ...state,
                data: {
                    ...state.data,
                    email: newEmails,
                },
                error: null,
                message: "Selected Email has been Reset.",
            }
        default:
            return state
    }
}
