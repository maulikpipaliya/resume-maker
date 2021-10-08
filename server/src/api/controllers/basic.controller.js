import asyncHandler from "express-async-handler"

import UserBasicDetailService from "../../services/basicDetail.service.js"
import { responseError, responseSuccess } from "../../services/util.service.js"

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
 * @author Maulik Pipaliya
 * @description - This function is used to update the basic profile of a user
 * @param {Object} req - Request object - Basic Profile Object
 */

export const updateBasicDetails = asyncHandler(async (req, res) => {
    try {
        console.log("Updating basic data")

        const { authEmail } = req.body.user
        const { basicObj } = req.body
        const { resumeIdx } = req.params

        if (!authEmail)
            return res.status(401).send({
                message: "Missing Email",
                success: false,
            })

        const response = await new UserBasicDetailService().updateBasicDetails(
            authEmail,
            resumeIdx,
            basicObj
        )

        if (response.success) responseSuccess(res, 200, response.message)
        else responseError(res, 400, response.message)
    } catch (error) {
        responseError(res, 400, error.message)
    }
})

export const resetBasicDetails = asyncHandler(async (req, res) => {
    try {
        console.log("Resetting basic data")

        const { authEmail } = req.body.user
        const { resumeIdx } = req.params

        if (!authEmail)
            return res.status(401).send({
                message: "Missing Email",
                success: false,
            })

        const response = await new UserBasicDetailService().resetBasicDetails(
            authEmail,
            resumeIdx
        )

        if (response.success) responseSuccess(res, 200, response.message)
        else responseError(res, 400, response.message)
    } catch (error) {
        responseError(res, 400, error.message)
    }
})
