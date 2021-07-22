import { IWork } from "../../schema";

export interface IWorkState {
    data: IWork[];
    error?: string | null;
    loading: boolean;
    message?: string | null;
}