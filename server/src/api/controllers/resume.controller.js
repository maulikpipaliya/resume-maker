import userModel from "../../models/user.model.js"
import asyncHandler from "express-async-handler"
import UserResumeService from "../../services/userResume.service.js"

/**
 * @author Sachin Rathod
 * @description - This function is used to get all the resumes of a user
 */
export const setBasics = asyncHandler(async (req, res) => {
    const { data, authEmail } = req.body
    if (!(data && authEmail)) return res.status(401).send("Missing Fields.")
    try {
        const user = await userModel.findOne({ authEmail })
        if (!user) return res.status(401).send("User not Found.")

        //For now it will be 0, this is for handling multiple resumes
        const idxToUpdate = 0

        Object.keys(data[idxToUpdate]).forEach(async (propLevelOne) => {
            Object.keys(data[idxToUpdate][propLevelOne]).forEach(
                async (propLevelTwo) => {
                    if (!user.data[idxToUpdate])
                        user.data[0] = data[idxToUpdate]
                    else
                        user.data[idxToUpdate][propLevelOne][propLevelTwo] =
                            data[idxToUpdate][propLevelOne][propLevelTwo]
                }
            )
        })
        const response = await user.save()
        if (!response) return res.status(400).json("Failed to update")
        else return res.status(201).json(response)
    } catch (err) {
        return res.status(400).send(err)
    }
})

/**
 * @description  Get all the resumes of a user
 * @author Maulik Pipaliya
 * @route_code  GET_ALL_RESUMES
 */

export const getAllResumes = asyncHandler(async (req, res) => {
    const { authEmail } = req.body

    console.log("GET_ALL_RESUMES")

    console.log("req.user")
    console.log(req.user)

    const gid = req.user.googleId

    console.log("API called")
    try {
        const response = await new UserResumeService().getAllResumeData(gid)
        console.log("response")
        console.log(response)
        if (response.success) return res.status(200).json(response)
        else return res.status(400).json(response)
    } catch (err) {
        return res.status(400).send(err)
    }
})
