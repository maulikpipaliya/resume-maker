import {
    EducationActionType,
    EducationMessageType,
    IEducationAction,
} from "../schema/action-types/IEducationAction";
import { IEducationState } from "../schema/state/IEducationState";

const initialEducationState: IEducationState = {
    data: [],
    loading: false,
    error: null,
};

export const educationReducer = (
    state = initialEducationState,
    action: IEducationAction
): IEducationState => {
    switch (action.type) {
        case EducationActionType.UPDATE_EDUCATION:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };

        case EducationActionType.ADD_EDUCATION:
            return {
                ...state,
                data: [...state.data, action.payload],
                message: "",
                error: "",
            };

        case EducationActionType.DELETE_EDUCATION:
            const ids = state.data.map((education) => education.id);
            console.log(ids);
            console.log(ids.indexOf(action.payload.id));
            console.log(action.payload.id);

            if (ids.indexOf(action.payload.id) === -1) {
                return {
                    ...state,
                    error: "Education can't be Deleted.",
                };
            } else {
                console.log("hello");

                return {
                    ...state,
                    data: state.data.filter(
                        (education) => education.id !== action.payload.id
                    ),
                    message: EducationMessageType.DELETE_EDUCATION,
                    error: "",
                };
            }
        case EducationActionType.RESET_EDUCATION:
            return {
                ...state,
                data: [],
                message: null,
                error: "",
            };

        case EducationActionType.UPDATE_EDUCATION_AT_INDEX:
            return {
                ...state,
                data: [
                    ...state.data.slice(0, action.payload.index),
                    {
                        ...state.data[action.payload.index],
                        ...action.payload.education,
                    },
                    ...state.data.slice(action.payload.index + 1),
                ],
                message: "",
                error: "",
            };

        default:
            return state;
    }
};
