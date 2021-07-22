import { IBasic, IProfile } from "../../schema";

export enum BasicActionType {
    UPDATE_BASICS = "UPDATE_BASICS",
    ADD_EMAIL = "ADD_EMAIL",
    DELETE_EMAIL = "DELETE_EMAIL",
    ADD_PROFILE = "ADD_PROFILE",
    DELETE_PROFILE = "DELETE_PROFILE",
    UPDATE_PROFILE = "UPDATE_PROFILE",
    ADD_CONTACT = "ADD_CONTACT",
    DELETE_CONTACT = "DELETE_CONTACT",
    UPDATE_CONTACT = "UPDATE_CONTACT",
}

interface IUpdateBasicAction {
    type: BasicActionType.UPDATE_BASICS;
    payload: IBasic;
}

interface IAddEmailAction {
    type: BasicActionType.ADD_EMAIL;
    payload: string;
}

interface IDeleteEmailAction {
    type: BasicActionType.DELETE_EMAIL;
    payload: string;
}

interface IAddProfileAction {
    type: BasicActionType.ADD_PROFILE;
    payload: IProfile;
}

interface IDeleteProfileAction {
    type: BasicActionType.DELETE_PROFILE;
    payload: number;
}

interface IUpdateProfileAction {
    type: BasicActionType.UPDATE_PROFILE;
    payload: IProfile;
}

interface IAddContactAction {
    type: BasicActionType.ADD_CONTACT;
    payload: string;
}

interface IDeleteContactAction {
    type: BasicActionType.DELETE_CONTACT;
    payload: string;
}

interface IUpdateContactAction {
    type: BasicActionType.UPDATE_CONTACT;
    payload: {
        id: number;
        newContact: string;
    };
}

export type IBasicAction =
    | IUpdateBasicAction
    | IAddEmailAction
    | IDeleteEmailAction
    | IAddProfileAction
    | IDeleteProfileAction
    | IUpdateProfileAction
    | IAddContactAction
    | IDeleteContactAction
    | IUpdateContactAction;
