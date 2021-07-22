import { IEducation } from "../../schema";

export interface IWorkState {
    data: IEducation[];
    error?: string | null;
    loading: boolean;
    message?: string | null;
}
