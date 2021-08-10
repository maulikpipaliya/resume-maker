import { IResumeData } from "./../schema"
import { initialLocalResumeData } from "../schema/emptyResumeData"

export const setStateLocalStorage = () => {
    if (localStorage.getItem("localResumeData") === null) {
        localStorage.setItem(
            "localResumeData",
            JSON.stringify(initialLocalResumeData)
        )
    }
}

export const getInitialDataFromLocalStorage = (propertyName: string) => {
    const localResumeData = localStorage.getItem("localResumeData")

    if (localResumeData) {
        const resumeData = JSON.parse(localResumeData)
        return resumeData[propertyName]
    }
    return {}
}

export const updateLocalStorageByProperty = (
    propertyName: string,
    value: any
) => {
    let localResumeData = localStorage.getItem("localResumeData")

    if (localResumeData !== null) {
        const obj = JSON.parse(localResumeData)
        obj[propertyName] = value
        localStorage.setItem("localResumeData", JSON.stringify(obj))
    }
}
