import { IAward } from '../../schema'

export enum AwardActionType {
    ADD_AWARD = 'ADD_AWARD',
    UPDATE_AWARD_AT_INDEX = 'UPDATE_AWARD_AT_INDEX',
    UPDATE_AWARDS = 'UPDATE_AWARDS',
    DELETE_AWARD = 'DELETE_AWARD',
    RESET_AWARDS = 'RESET_AWARDS',
}

interface IResetAwards {
    type: AwardActionType.RESET_AWARDS
}

interface IUpdateAwards {
    type: AwardActionType.UPDATE_AWARDS
    payload: IAward[]
}

interface IAddAwardAction {
    type: AwardActionType.ADD_AWARD
    payload: IAward
}

interface IUpdateAwardAtIndexAction {
    type: AwardActionType.UPDATE_AWARD_AT_INDEX
    payload: {
        updatedrecord: IAward
        idx: number
    }
}

interface IDeleteAwardAction {
    type: AwardActionType.DELETE_AWARD
    payload: {
        title: string
    }
}

export type IAwardAction =
    | IAddAwardAction
    | IUpdateAwardAtIndexAction
    | IDeleteAwardAction
    | IUpdateAwards
    | IResetAwards
