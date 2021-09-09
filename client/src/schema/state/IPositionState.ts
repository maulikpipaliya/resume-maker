import { IPosition } from "../../schema"

export interface IPositionState {
    data: IPosition[]
    error: string | null
    loading: boolean
    message: string | null
}
