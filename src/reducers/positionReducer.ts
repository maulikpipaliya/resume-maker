import {
    IPositionAction,
    PositionActionType,
} from "../schema/action-types/IPositionAction";
import { IPositionState } from "../schema/state/IPositionState";

const initialPositionState: IPositionState = {
    data: [{ title: "" }],
    error: "",
    loading: false,
};

export const positionReducer = (
    state = initialPositionState,
    action: IPositionAction
) => {
    switch (action.type) {
        case PositionActionType.ADD_POSITION:
            return { ...state, data: [...state.data, action.payload] };

        case PositionActionType.DELETE_POSITION:
            const indexOfTitle: number = state.data.findIndex(
                (item) => item.title === action.payload.title
            );
            console.log(indexOfTitle);
            if (indexOfTitle !== -1) {
                const positionToRemove = state.data.splice(indexOfTitle, 1);
                return {
                    ...state,
                    data: [
                        ...state.data.filter(
                            (award) => award !== positionToRemove[0]
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
