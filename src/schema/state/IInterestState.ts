import { IInterest } from "../../schema";

export interface IInterestState {
    data: IInterest[];
    error: string | null;
    loading: boolean;
}
