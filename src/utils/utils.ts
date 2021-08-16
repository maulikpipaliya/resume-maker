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
