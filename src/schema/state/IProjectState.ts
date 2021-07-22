import { IProject } from "../../schema";

export interface IProjectState {
    data: IProject[];
    error: string | null;
    loading: boolean;
}
