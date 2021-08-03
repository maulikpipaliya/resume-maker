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
            const educationData = [...state.data];
            // console.log(ids);
            // console.log(educationData.indexOf(action.payload));
            // console.log(action.payload.id);

            const idx = action.payload;

            if (idx >= 0 && idx < educationData.length) {
                educationData.splice(idx, 1);
                
                return {
                    ...state,
                    data: educationData,
                    message: `Education deleted at ${idx}`,
                    error: "",
                };
            } else {
                return {
                    ...state,
                    error: "Education can't be Deleted. Wrong Index",
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
            const copy = [...state.data];
            if (
                action.payload.index >= 0 &&
                action.payload.index < copy.length
            ) {
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
                    message: "Updated",
                    error: "",
                };
            }
            return {
                ...state,
                error: "Index out of range",
            };

        default:
            return state;
    }
};
