import userModel from "../models/user.model.js"

export default class UserResumeService {
    async countResumes(authEmail) {
        const user = await userModel.findOne({ authEmail })
        return user.data.length
    }

    // Whole object based functions
    async getAllResumeData(googleId) {
        try {
            const user = await userModel.findOne({ googleId })

            if (user)
                return {
                    data: user.data,
                    success: true,
                    message: "Resume data fetched successfully",
                }
            return {
                success: false,
                message: "No resume data found",
            }
        } catch (error) {
            return {
                success: false,
                message: "Error fetching resume data",
            }
        }
    }

    async getSingleResume(authEmail, resumeIdx) {
        try {
            const resumeDataAtGivenIdx = await userModel.findOne({
                authEmail,
                "data.resumeIdx": resumeIdx,
            })

            if (resumeDataAtGivenIdx)
                return {
                    data: resumeDataAtGivenIdx,
                    success: true,
                    message: "Resume data fetched successfully",
                }
        } catch (error) {
            return {
                success: false,
                message: "No resume data found",
            }
        }
    }

    // Basic Details
    async getBasicDetails(authEmail, resumeIdx) {
        try {
            const user = await userModel
                .findOne({
                    authEmail,
                    "data.resumeIdx": resumeIdx,
                })
                .select("data.$.basics")
        } catch (error) {}
    }

    async updateBasicDetails(authEmail, basicDetails) {
        const user = await userModel.findOneAndUpdate(
            { authEmail },
            { basicDetails }
        )
        return user
    }
}
