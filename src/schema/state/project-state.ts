import { IProject } from "../project-schema";

export interface IProjectState {
    data: IProject[];
    error: string | null;
    loading: boolean;
}
