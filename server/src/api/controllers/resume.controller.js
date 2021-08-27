import userModel from "../../models/userModel.js"
import asyncHandler from "express-async-handler"

export const setBasics = asyncHandler(async (req, res) => {
    const { data, authEmail } = req.body
    if (!(data && authEmail)) return res.status(401).send("Missing Fields.")
    try {
        const user = await userModel.findOne({ authEmail })
        if (!user) return res.status(401).send("User not Found.")
        Object.keys(data[0]).forEach(async (schema) => {
            Object.keys(data[0][schema]).forEach(async (key) => {
                if (!user.data[0]) user.data[0] = data[0]
                else user.data[0][schema][key] = data[0][schema][key]
            })
        })
        const response = await user.save()
        if (!response) return res.status(400).json("Failed to update")
        else return res.status(201).json(response)

        console.log(element)
    } catch (err) {
        return res.status(400).send(err)
    }
})
