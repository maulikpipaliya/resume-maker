import { IEducation } from "../../schema";

export enum EducationActionType {
    ADD_EDUCATION = "ADD_EDUCATION",
    UPDATE_EDUCATION = "UPDATE_EDUCATION",
    DELETE_EDUCATION = "DELETE_EDUCATION",
    GET_EDUCATIONS = "GET_EDUCATIONS",
    GET_EDUCATION_BY_ID = "GET_EDUCATION_BY_ID",
    RESET_EDUCATION = "RESET_EDUCATION",
}

export enum EducationActionErrors {
    EDUCATION_NOT_FOUND = "ID doesn't exist",
}

interface IAddEducationAction {
    type: EducationActionType.ADD_EDUCATION;
    payload: IEducation;
}

interface IUpdateEducationAction {
    type: EducationActionType.UPDATE_EDUCATION;
    payload: {
        id: number;
        education: IEducation;
    };
}

interface IDeleteEducationAction {
    type: EducationActionType.DELETE_EDUCATION;
    payload: {
        id: number;
    };
}

interface IGetEducationsAction {
    type: EducationActionType.GET_EDUCATIONS;
}

interface IGetEducationByIdAction {
    type: EducationActionType.GET_EDUCATION_BY_ID;
    payload: {
        id: number;
    };
}

interface IResetEducationAction {
    type: EducationActionType.RESET_EDUCATION;
}

export type IEducationAction =
    | IAddEducationAction
    | IUpdateEducationAction
    | IDeleteEducationAction
    | IGetEducationsAction
    | IGetEducationByIdAction
    | IResetEducationAction;
