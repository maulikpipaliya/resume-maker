import { IWorkAction, WorkActionType } from "../schema/action-types/IWorkAction"
import { Dispatch } from "redux"

import { IWork } from "../schema"

export const addWork = (workEx: IWork) => (dispatch: Dispatch<IWorkAction>) => {
    dispatch({
        type: WorkActionType.ADD_WORK,
        payload: workEx,
    })
}

export const deleteWork =
    (index: number) => (dispatch: Dispatch<IWorkAction>) => {
        dispatch({
            type: WorkActionType.DELETE_WORK,
            payload: index,
        })
    }

export const updateWorkByIndex =
    (idx: number, workEx: IWork) => (dispatch: Dispatch<IWorkAction>) => {
        dispatch({
            type: WorkActionType.UPDATE_WORK_BY_INDEX,
            payload: { idx, workToUpdate: workEx },
        })
    }
