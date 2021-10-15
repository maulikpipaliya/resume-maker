import asyncHandler from "express-async-handler"
import userModel from "../../models/user.model.js"
import UserEducationService from "../services/education.service.js"
import { responseError, responseSuccess } from "../services/util.service.js"

/**
 * List of APIs for education
 *
 * 1. GET /api/r/:resumeIdx/education/
 * 2. GET /api/r/:resumeIdx/education/:eIdx
 * 3. POST /api/r/:resumeIdx/education/
 * 4. PUT /api/r/:resumeIdx/education/:eIdx
 * 5. DELETE /api/r/:resumeIdx/education/:eIdx
 *
 */

/**
 * @route  GET /api/r/:resumeIdx/education/
 */
export const getAllEducationItems = asyncHandler(async (req, res, next) => {
    const { googleId } = req.user
    const { resumeIdx } = req.params

    const response = await new UserEducationService().getAllEducationItems(
        googleId,
        resumeIdx
    )

    if (response.success) responseSuccess(res, 200, response)
    else responseError(res, 400, response.message)
})

/**
 * @route  GET /api/r/:resumeIdx/education/:eIdx
 */
export const getEducationItem = asyncHandler(async (req, res, next) => {
    const { googleId } = req.user

    const { resumeIdx, eIdx } = req.params

    const response = await new UserEducationService().getEducationItem(
        googleId,
        resumeIdx,
        eIdx
    )

    if (response.success) responseSuccess(res, 200, response)
    else responseError(res, 400, response.message)
})

/**
 * @route  POST /api/r/:resumeIdx/education/
 */

export const addEducation = asyncHandler(async (req, res) => {
    const { googleId } = req.user

    const { resumeIdx, eIdx } = req.params
    const user = await userModel.findOne({ googleId })
    if (!user) {
        return res.status(400).send({
            message: "User not found",
            success: false,
        })
    }

    const idx = 0

    //need to be fixed later for multiple education at particular index
    const pushedEmptyEducation = await userModel.findOneAndUpdate(
        { googleId, "data.orderIndex": idx },
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

/**
 * @route  PUT /api/r/:resumeIdx/education/:eIdx
 */

export const updateEducation = asyncHandler(async (req, res) => {
    //add Education Object to database
    const { educationObj: data, googleId } = req.body
    const user = await userModel.findOne({ googleId })

    if (!user)
        return res.status(400).send({
            message: "Not authorized",
            success: false,
        })

    const updatedUser = await userModel.findOneAndUpdate(
        { googleId, "data.education.orderIndex": req.params.idx },
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
