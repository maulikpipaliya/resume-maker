import { IBasic } from "../../schema";

export interface IWorkState {
    data: IBasic[];
    error?: string | null;
    loading: boolean;
    message?: string | null;
}
