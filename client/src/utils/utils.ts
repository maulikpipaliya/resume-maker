export const convertDate = (date: Date | null | undefined) => {
    if (date === null || date === undefined) {
        return ""
    }
    date = new Date(date)
    let monthNames = [
        "January,",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    // console.log("hello" + date)
    // console.log("hel" + new Date(date).getDate())

    let day = date.getDate()

    let monthIndex = date.getMonth()
    let monthName = monthNames[monthIndex]

    let year = date.getFullYear()

    return `${monthName} ${day}, ${year}`
}

export const convertToSlug = (text: string) => {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-")
}

export const getTicketFromLocalStorage = () => {
    return getFromLS("gt")
}

/**
 *
 * @todo testing needs to be done on this function
 *
 */
export const updateTokenInLocalStorage = (newToken: string) => {
    console.log("Updating new token at ", new Date())
    let oldToken = localStorage.getItem("gt")
    if (oldToken) {
        const parsedToken = JSON.parse(oldToken)
        parsedToken.tokenId = newToken
        localStorage.setItem("gt", JSON.stringify(parsedToken))
        return true
    }
    return null
}

export const getFromLS = (key: string) => {
    let value = localStorage.getItem(key)
    if (value) {
        try {
            return JSON.parse(value)
        } catch (e) {
            return value
        }
    }
    return null
}

export const setToLS = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const removeFromLS = (key: string) => {
    localStorage.removeItem(key)
}
