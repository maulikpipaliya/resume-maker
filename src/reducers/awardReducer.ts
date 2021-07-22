import { IAwardAction,AwardActionType } from "../schema/action-types/IAwardAction";
import { IAwardState } from "../schema/state/IAwardState";


const initialAwardState: IAwardState = {
    data: [{ title: "" }],
    error: "",
};

export const awardReducer = (
    state = initialAwardState,
    action: IAwardAction
) => {
    switch (action.type) {
        case AwardActionType.ADD_AWARD:
            return { ...state, data: [...state.data, action.payload] };

        case AwardActionType.DELETE_AWARD:
            const indexOfTitle: number = state.data.findIndex(
                (item) => item.title === action.payload.title
            );
            console.log(indexOfTitle);
            if (indexOfTitle !== -1) {
                const awardToRemove = state.data.splice(indexOfTitle, 1);
                return {
                    ...state,
                    data: [
                        ...state.data.filter(
                            (award) => award !== awardToRemove[0]
                        ),
                    ],
                };
            } else {
                return state;
            }

        default:
            return state;
    }
};
