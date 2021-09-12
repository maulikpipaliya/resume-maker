import asyncHandler from "express-async-handler"
import userModel from "../../models/user.model.js"

import * as initResumeData from "../../models/initResumeData.js"
import UserResumeService from "../../services/userResume.service.js"

export const getResumeDataAtIndex = asyncHandler(async (req, res, next) => {
    const { resumeIdx } = req.params
    if (resumeIdx > 0) {
        try {
            const resumeData =
                await new UserResumeService().getResumeDataAtIndex(resumeIdx)
        } catch (error) {}
    } else {
        return res.status(400).json({
            success: false,
            message: "Invalid resume index",
        })
    }
})

/**
 *
 *
 */
export const getBasicDetails = asyncHandler(async (req, res, next) => {
    const { resumeId } = req.params
})

/**
 * @api {get} /api/profile/:id Get profile
 */
export const getProfile = asyncHandler(async (req, res) => {
    const { authEmail } = req.params.id
})

export const resetBasics = asyncHandler(async (req, res) => {
    const { authEmail } = req.body
})

export const addEducation = asyncHandler(async (req, res) => {
    const { authEmail } = req.body
    const user = await userModel.findOne({ authEmail })
    if (!user) {
        return res.status(400).send({
            message: "User not found",
            success: false,
        })
    }

    const idx = 0

    //need to be fixed later for multiple education at particular index
    const pushedEmptyEducation = await userModel.findOneAndUpdate(
        { authEmail, "data.orderIndex": idx },
        {
            $push: {
                "data.0.education": initResumeData.initEducationObj,
            },
        },
        { new: true, upsert: true, setDefaultsOnInsert: true }
    )

    console.log(pushedEmptyEducation)

    if (pushedEmptyEducation)
        return res.status(200).send({
            message: "Successfully added",
            success: true,
        })

    return res.status(400).send({
        message: "Failed to add",
        success: false,
    })
})

export const updateEducation = asyncHandler(async (req, res) => {
    //add Education Object to database
    const { educationObj: data, authEmail } = req.body
    const user = await userModel.findOne({ authEmail })

    if (!user)
        return res.status(400).send({
            message: "Not authorized",
            success: false,
        })

    const updatedUser = await userModel.findOneAndUpdate(
        { authEmail, "data.education.orderIndex": req.params.idx },
        {
            $set: {
                "data.education.$": data,
            },
        },
        { new: true, upsert: true, setDefaultsOnInsert: true }
    )

    console.log("updatedUser")
    console.log(updatedUser)
})
