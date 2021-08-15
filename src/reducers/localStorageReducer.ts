import { initResumeData } from "../schema/initResumeData"

export const setStateLocalStorage = () => {
    if (localStorage.getItem("localResumeData") === null) {
        localStorage.setItem("localResumeData", JSON.stringify(initResumeData))
    }
}

export const isLSPropertyEmpty = async (propertyName: string) => {
    const localResumeData = localStorage.getItem("localResumeData")

    if (localResumeData) {
        const resumeData = JSON.parse(localResumeData)
        
        if (Object.keys(resumeData[propertyName]).length === 0) return true
        if (resumeData[propertyName].length === 0) return true
        return false
    }
}

export const getDataFromLS = (propertyName: string, idx: number = -1) => {
    const localResumeData = localStorage.getItem("localResumeData")

    if (localResumeData) {
        const resumeData = JSON.parse(localResumeData)
        console.log("LS:", resumeData[propertyName])

        // if array is empty, return null
        if (resumeData[propertyName].length === 0) {
            console.log("Education array is empty")
            return []
        }

        if (idx >= 0) {
            console.log(`Education array at ${idx} is below`)
            console.log(resumeData[propertyName][idx])
            return resumeData[propertyName][idx]
        }
        return resumeData[propertyName]
    }
    return {}
}

export const updateLocalStorageByProperty = (
    propertyName: string,
    value: any,
    idx: number = -1
) => {
    let localResumeData = localStorage.getItem("localResumeData")

    if (localResumeData !== null) {
        const obj = JSON.parse(localResumeData)

        if (idx >= 0) {
            obj[propertyName][idx] = value
        } else {
            obj[propertyName] = value
        }
        localStorage.setItem("localResumeData", JSON.stringify(obj))
    }
}
