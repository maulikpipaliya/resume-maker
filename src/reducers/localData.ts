import { RootState } from "../store"

export const loadState = () => {
    try {
        const localResumeData = localStorage.getItem("localResumeData")

        if (localResumeData === null) return undefined

        return JSON.parse(localResumeData)
    } catch (error) {
        return undefined
    }
}

export const saveState = (state: RootState) => {
    try {
        localStorage.setItem("localResumeData", JSON.stringify(state))
    } catch (error) {
        console.log(error)
        return undefined
    }
}
