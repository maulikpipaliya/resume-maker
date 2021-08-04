import { error } from "console"
import { stat } from "fs"
import { IAward } from "../schema"
import {
    IAwardAction,
    AwardActionType,
} from "../schema/action-types/IAwardAction"
import { IAwardState } from "../schema/state/IAwardState"

const initialAwardState: IAwardState = {
    data: [{ title: "" }],
    error: "",
}

export const awardReducer = (
    state = initialAwardState,
    action: IAwardAction
): IAwardState => {
    switch (action.type) {
        case AwardActionType.RESET_AWARDS:
            return {
                ...state,
                data: [],
                error: "",
            }

        case AwardActionType.UPDATE_AWARD_AT_INDEX:
            const alldata = [...state.data]

            if (
                alldata.length <= action.payload.idx ||
                action.payload.idx < 0
            ) {
                return { ...state, error: "Invalid Index" }
            } else {
                alldata[action.payload.idx] = action.payload.updatedrecord
                return { ...state, data: alldata }
            }

        case AwardActionType.UPDATE_AWARDS:
            console.log("awards")
            console.log(action.payload)
            const newState = {
                data: action.payload,
                error: "",
                loading: false,
                message: "All Awards are Updated.",
            }
            return newState

        case AwardActionType.ADD_AWARD:
            return { ...state, data: [...state.data, action.payload] }

        case AwardActionType.DELETE_AWARD:
            const indexOfTitle: number = state.data.findIndex(
                (item) => item.title === action.payload.title
            )
            console.log(indexOfTitle)
            if (indexOfTitle !== -1) {
                const awardToRemove = state.data.splice(indexOfTitle, 1)
                return {
                    ...state,
                    data: [
                        ...state.data.filter(
                            (award) => award !== awardToRemove[0]
                        ),
                    ],
                }
            } else {
                return state
            }

        default:
            return state
    }
}
