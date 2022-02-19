import asyncHandler from "express-async-handler"
import userModel from "../../models/user.model.js"
import UserEducationService from "../services/education.service.js"
import { responseError, responseSuccess } from "../services/util.service.js"

/**
 * List of APIs for education
 *
 * 1. GET /api/r/:resumeIdx/education/
 * 2. POST /api/r/:resumeIdx/education/
 * 3. GET /api/r/:resumeIdx/education/:edIdx
 * 4. PUT /api/r/:resumeIdx/education/:edIdx
 * 5. DELETE /api/r/:resumeIdx/education/:edIdx
 *
 */

/**
 * @route  GET /api/r/:resumeIdx/education/
 */
export const getAllEducation = asyncHandler(async (req, res, next) => {
    const { googleId } = req.user
    const { resumeIdx } = req.params

    const response = await new UserEducationService().getAllEducationItems(
        googleId,
        resumeIdx
    )

    if (response.success) responseSuccess(res, 200, response)
    else responseError(res, 400, response)
})

/**
 * @route  POST /api/r/:resumeIdx/education/
 * @param  {Object} EducationObject
 */

export const addEducation = asyncHandler(async (req, res) => {
    const { googleId } = req.user
    const { resumeIdx } = req.params
    const educationBody = req.body
    

    const response = await new UserEducationService().addEducationItem(
        googleId,
        resumeIdx,
        educationBody
    )

    if (response.success) responseSuccess(res, 200, response)
    else responseError(res, 400, response)
})

/**
 * @route  GET /api/r/:resumeIdx/education/:edIdx
 */
export const getEducation = asyncHandler(async (req, res, next) => {
    const { googleId } = req.user

    const { resumeIdx, edIdx } = req.params

    console.log(req.params)

    const response = await new UserEducationService().getEducationItem(
        googleId,
        resumeIdx,
        edIdx
    )

    if (response.success) responseSuccess(res, 200, response)
    else responseError(res, 400, response.message)
})

/**
 * @route  PUT /api/r/:resumeIdx/education/:edIdx
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

export const deleteEducation = asyncHandler(async (req, res) => {})
