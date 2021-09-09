import asyncHandler from "express-async-handler"
import userModel from "../../models/userModel.js"

/**
 * @api {get} /api/profile/:id Get profile
 */
export const getProfile = asyncHandler(async (req, res) => {
    const { authEmail } = req.params.id
})

/**
 * @author Maulik Pipaliya
 * @description - This function is used to update the basic profile of a user
 * @param {Object} req - Request object - Basic Profile Object
 */

export const updateBasics = asyncHandler(async (req, res) => {
    const { data, authEmail } = req.body

    if (!authEmail)
        return res.status(401).send({
            message: "Missing Email",
            success: false,
        })

    const userFoundAndUpdated = await userModel.findOneAndUpdate(
        { authEmail },
        {
            $set: {
                basics: data,
            },
        }
    )

    if (!userFoundAndUpdated)
        return res.status(400).send({
            message: "Failed to update",
            success: false,
        })
})
