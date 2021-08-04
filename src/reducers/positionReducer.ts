import {
    IPositionAction,
    PositionActionType,
} from "../schema/action-types/IPositionAction";
import { IPositionState } from "../schema/state/IPositionState";

const initialPositionState: IPositionState = {
    data: [],
    error: "",
    loading: false,
    message: "",
};

export const positionReducer = (
    state = initialPositionState,
    action: IPositionAction
) => {
    switch (action.type) {
        case PositionActionType.UPDATE_POSITION_BY_INDEX:
            console.log(action.payload.index);
            return state;
        case PositionActionType.UPDATE_POSITIONS:
            console.log("Hahah");
            console.log(action.payload);
            const newState = {
                data: action.payload,
                error: "",
                loading: false,
            };
            return newState;

        case PositionActionType.ADD_POSITION:
            return { ...state, data: [...state.data, action.payload] };

        case PositionActionType.DELETE_POSITION:
            const indexOfTitle: number = state.data.findIndex(
                (item) => item.title === action.payload
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
