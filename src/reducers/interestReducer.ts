import {
    IInterestAction,
    InterestActionType,
} from "../schema/action-types/IInterestAction";
import { IInterestState } from "../schema/state/IInterestState";

const initialInterestState: IInterestState = {
    data: [],
    error: null,
    loading: false,
};

export const interestReducer = (
    state: IInterestState = initialInterestState,
    action: IInterestAction
) => {
    switch (action.type) {
        case InterestActionType.ADD_INTEREST:
            return {
                ...state,
                data: [...state.data, action.payload],
                error: null,
            };
        case InterestActionType.DELETE_INTEREST:
            return {
                ...state,
                data: state.data.filter(
                    (interest) => interest.name !== action.payload.name
                ),
                error: null,
            };

        default:
            return state;
    }
};
