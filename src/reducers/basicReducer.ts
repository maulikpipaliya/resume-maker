import {
    IBasicAction,
    BasicActionType,
    BasicActionSuccess,
    BasicActionErrors,
} from "../schema/action-types/IBasicAction";
import { IBasicState } from "../schema/state/IBasicState";

const initialBasicState: IBasicState = {
    data: {
        name: "",
        email: [],
    },
    loading: false,
    error: null,
    message: null,
};

export const basicReducer = (
    state: IBasicState = initialBasicState,
    action: IBasicAction
) => {
    switch (action.type) {
        case BasicActionType.UPDATE_BASICS:
            return {
                ...state,
                data: action.payload,
                message: BasicActionSuccess.BASICS_UPDATED,
                error: null,
            };
        case BasicActionType.ADD_EMAIL:
            return {
                ...state,
                data: {
                    ...state.data,
                    email: [...state.data.email, action.payload],
                },
                error: null,
                message: BasicActionSuccess.EMAIL_ADDED,
            };
        case BasicActionType.DELETE_EMAIL:
            const emails = state.data.email.map((email) => email);
            if (emails.indexOf(action.payload) === -1) {
                return {
                    ...state,
                    error: BasicActionErrors.EMAIL_NOT_FOUND,
                    message: null,
                };
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
                };
            }
        case BasicActionType.ADD_PROFILE:
            const newProfiles = state.data.profile?.concat(action.payload);

            return {
                ...state,
                data: {
                    ...state.data,
                    profile: newProfiles,
                },
                error: null,
                message: "New profile has been added",
            };
        default:
            return state;
    }
};