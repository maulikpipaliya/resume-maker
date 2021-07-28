import { IBasic, IProfile } from '../../schema'

export enum BasicActionType {
    UPDATE_BASICS = 'UPDATE_BASICS',
    UPDATE_NAME = 'UPDATE_NAME',
    ADD_EMAIL = 'ADD_EMAIL',
    DELETE_EMAIL = 'DELETE_EMAIL',
    UPDATE_EMAIL = 'UPDATE_EMAIL',
    RESET_EMAIL = 'RESET_EMAIL',
    RESET_EMAIL_BY_INDEX = 'RESET_EMAIL_BY_INDEX',
    ADD_PROFILE = 'ADD_PROFILE',
    DELETE_PROFILE = 'DELETE_PROFILE',
    UPDATE_PROFILE = 'UPDATE_PROFILE',
    ADD_CONTACT = 'ADD_CONTACT',
    DELETE_CONTACT = 'DELETE_CONTACT',
    UPDATE_CONTACT = 'UPDATE_CONTACT',
    UPDATE_CITY = 'UPDATE_CITY',
}

export enum BasicActionErrors {
    EMAIL_NOT_FOUND = 'Email is wrong, please enter valid email',
    INVALID_PROFILE = 'INVALID_PROFILE',
    INVALID_CONTACT = 'INVALID_CONTACT',
}

export enum BasicActionSuccess {
    BASICS_UPDATED = 'Basic details have been updated',
    EMAIL_ADDED = 'Email has been added',
    EMAIL_DELETED = 'Email has been deleted',
}

interface IUpdateBasicAction {
    type: BasicActionType.UPDATE_BASICS
    payload: IBasic
}

interface IUpdateNameAction {
    type: BasicActionType.UPDATE_NAME
    payload: string
}

interface IAddEmailAction {
    type: BasicActionType.ADD_EMAIL
    payload: string
}

interface IDeleteEmailAction {
    type: BasicActionType.DELETE_EMAIL
    payload: string
}

interface IUpdateEmailAction {
    type: BasicActionType.UPDATE_EMAIL
    payload: {
        email: string
        newEmail: string
    }
}

interface IResetEmailAction {
    type: BasicActionType.RESET_EMAIL
}

interface IResetEmailByIndexAction {
    type: BasicActionType.RESET_EMAIL_BY_INDEX
    payload: number
}

interface IAddProfileAction {
    type: BasicActionType.ADD_PROFILE
    payload: IProfile
}

interface IDeleteProfileAction {
    type: BasicActionType.DELETE_PROFILE
    payload: number
}

interface IUpdateProfileAction {
    type: BasicActionType.UPDATE_PROFILE
    payload: IProfile
}

interface IAddContactAction {
    type: BasicActionType.ADD_CONTACT
    payload: string
}

interface IDeleteContactAction {
    type: BasicActionType.DELETE_CONTACT
    payload: string
}

interface IUpdateContactAction {
    type: BasicActionType.UPDATE_CONTACT
    payload: {
        id: number
        newContact: string
    }
}

export type IBasicAction =
    | IUpdateBasicAction
    | IUpdateNameAction
    | IAddEmailAction
    | IResetEmailByIndexAction
    | IDeleteEmailAction
    | IUpdateEmailAction
    | IResetEmailAction
    | IAddProfileAction
    | IDeleteProfileAction
    | IUpdateProfileAction
    | IAddContactAction
    | IDeleteContactAction
    | IUpdateContactAction
