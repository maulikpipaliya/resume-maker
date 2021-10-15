import asyncHandler from "express-async-handler"

import UserBasicDetailService from "../services/basicDetail.service.js"
import { responseError, responseSuccess } from "../services/util.service.js"

/**
 * List of APIs for basic details
 *
 * 1. GET /api/r/:resumeIdx/basics
 * 2. PUT /api/r/:resumeIdx/basics
 * 3. DELETE /api/r/:resumeIdx/basics
 */

/**
 * @description Get basic details of a user
 * @route GET /api/r/:resumeIdx/basics
 *
 */

export const getBasicDetails = asyncHandler(async (req, res, next) => {
    try {
        console.log("getBasicDetails API called")
        console.log(req.body)

        const { googleId } = req.user
        const resumeIdx = req.params.resumeIdx

        if (!googleId || !resumeIdx)
            return responseError(
                res,
                400,
                "GoogleId and resumeIdx both required"
            )

        const userBasicDetails =
            await new UserBasicDetailService().getBasicDetails(
                googleId,
                resumeIdx
            )

        if (userBasicDetails.success) {
            console.log("userBasicDetails: ", userBasicDetails)
            return responseSuccess(res, 200, userBasicDetails)
        } else return responseError(res, 400, "Some error occured")
    } catch (error) {
        return responseError(res, 400, error)
    }
})

/**
 *
 * @description - This function is used to update the basic profile of a user
 * @param {Object} - Basic Profile Object
 * @route PUT /api/r/:resumeIdx/basics
 */

export const updateBasicDetails = asyncHandler(async (req, res) => {
    try {
        console.log("Updating basic data")

        console.log(req.user)
        console.log(req.params)

        const { googleId } = req.user
        const resumeIdx = req.params.resumeIdx

        const basicObj = req.body

        if (!googleId || !resumeIdx)
            return responseError(
                res,
                400,
                "GoogleId and resumeIdx both required"
            )

        const response = await new UserBasicDetailService().updateBasicDetails(
            googleId,
            resumeIdx,
            basicObj
        )

        if (response.success) responseSuccess(res, 200, response.message)
        else responseError(res, 400, response.message)
    } catch (error) {
        responseError(res, 400, error.message)
    }
})

/**
 * @route DELETE /api/r/:resumeIdx/basics
 */
export const resetBasicDetails = asyncHandler(async (req, res) => {
    try {
        console.log("Resetting basic data")

        const { googleId } = req.user
        const { resumeIdx } = req.params

        if (!googleId)
            return res.status(401).send({
                message: "Missing Authentication",
                success: false,
            })

        const response = await new UserBasicDetailService().resetBasicDetails(
            googleId,
            resumeIdx
        )

        if (response.success) responseSuccess(res, 200, response)
        else responseError(res, 400, response.message)
    } catch (error) {
        responseError(res, 400, error.message)
    }
})
