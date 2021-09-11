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
    let token = localStorage.getItem("googleTicket")
    if (token) {
        const parsedToken = JSON.parse(token)
        return parsedToken
    }
    return null
}

/**
 *
 * @todo testing needs to be done on this function
 *
 */
export const updateTokenInLocalStorage = (token: string) => {
    let oldToken = localStorage.getItem("googleTicket")
    if (oldToken) {
        const parsedToken = JSON.parse(oldToken)
        parsedToken.tokenId = token
        localStorage.setItem("googleTicket", JSON.stringify(parsedToken))
        return true
    }
    return null
}
