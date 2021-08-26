import userModel from "../../models/userModel.js"
import asyncHandler from "express-async-handler"

export const setBasics = asyncHandler(async (req, res) => {
    const { data, authEmail, type } = req.body
    if (!(data && authEmail && type))
        return res.status(401).send("Missing Fields.")
    try {
        const user = await userModel.findOne({ authEmail })
        //console.log(user)
        console.log(data[0][type])
        if (!user) return res.status(401).send("User not Found.")

        Object.keys(data[0][type]).forEach(async (key) => {
            if (!user.data[0]) user.data[0] = data[0]
            else user.data[0][type][key] = data[0][type][key]
        })
        const response = await user.save()
        if (!response) res.status(400).json("Failed to update")
        else res.status(201).json(response)

        console.log(element)
    } catch (err) {
        // console.log(err)
        res.status(400).send(err)
    }
})
