import { ISkill } from "../../schema";

export interface ISkillState {
    data: ISkill[];
    error: string;
}