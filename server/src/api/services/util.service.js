export const responseError = (res, code, err) => {
    if (typeof err == "object" && typeof err.message != "undefined")
        err = err.message

    if (typeof code !== "undefined") res.statusCode = code

    return res.json({ success: false, message: err })
}

export const responseSuccess = (res, code, data) => {
    let dataToSend = { success: true }

    if (typeof data == "object") {
        dataToSend = Object.assign(data, dataToSend) //merge the objects
    }

    if (typeof code !== "undefined") res.statusCode = code
    return res.json(dataToSend)
}
