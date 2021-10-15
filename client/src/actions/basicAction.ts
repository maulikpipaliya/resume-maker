import { ThunkAction } from "redux-thunk"
import { IBasic } from "../schema"
import {
    BasicActionType,
    IBasicAction,
} from "../schema/action-types/IBasicAction"
import { RootState } from "../store"
import axios from "axios"
import { config, serverURLs } from "../config"
import { initResumeData } from "../schema/initResumeData"

export const setBasicDataFromDB = (
    resumeIdx: number
): ThunkAction<void, RootState, null, IBasicAction> => {
    return async (dispatch) => {
        const { data: basicData } = await axios.get(
            serverURLs.basicData(resumeIdx),
            {
                withCredentials: true,
            }
        )

        if (basicData.success) {
            const basicDetails: IBasic = basicData.data.data[resumeIdx].basics
            console.log("basicDetails")
            console.log(basicDetails)

            dispatch({
                type: BasicActionType.UPDATE_BASICS_FROM_DB,
                payload: basicDetails,
            })
        } else {
            dispatch({
                type: BasicActionType.UPDATE_BASICS_FROM_DB,
                payload: initResumeData.basics,
            })
        }
    }
}

export const updateName = (
    newName: string
): ThunkAction<void, RootState, null, IBasicAction> => {
    return async (dispatch) => {
        dispatch({
            type: BasicActionType.UPDATE_NAME,
            payload: newName,
        })
    }
}

export const updateBasics = (
    basicObj: IBasic
): ThunkAction<void, RootState, null, IBasicAction> => {
    return async (dispatch) => {
        dispatch({
            type: BasicActionType.UPDATE_BASICS,
            payload: basicObj,
        })
    }
}

/**
 * @description update the profile in database
 */

export const dbUpdateBasics = async (basicObj: IBasic, resumeIdx: number) => {
    const res = await axios.put(
        serverURLs.basicData(resumeIdx),
        {
            basicObj,
        },
        {
            withCredentials: true,
        }
    )

    console.log("Updated basic data in Database")

    if (res.status === 200) {
        return {
            success: true,
            message: "Successfully updated the basics",
        }
    }
}

export const resetEmails = (): ThunkAction<
    void,
    RootState,
    null,
    IBasicAction
> => {
    return async (dispatch) => {
        dispatch({
            type: BasicActionType.RESET_EMAIL,
        })
    }
}
