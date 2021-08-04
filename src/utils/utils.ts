export const convertDate = (date: Date | null | undefined) => {
    if (date === null || date === undefined) {
        return ""
    }

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

    let day = date.getDate()

    let monthIndex = date.getMonth()
    let monthName = monthNames[monthIndex]

    let year = date.getFullYear()

    return `${monthName} ${day}, ${year}`
}
