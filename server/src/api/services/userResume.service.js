import userModel from "../../models/user.model.js"

export default class UserResumeService {
    async countResumes(googleId) {
        const user = await userModel.findOne({ googleId })
        return user.data.length
    }

    // Whole object based functions
    async getAllResumeData(googleId) {
        try {
            const allResumes = await userModel.findOne({ googleId })

            if (allResumes)
                return {
                    data: allResumes.data,
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

    async getSingleResume(googleId, resumeIdx) {
        console.log("In Service")
        try {
            const { data: resumeDataAtGivenIdx } = await userModel.findOne({
                googleId,
                "data.resumeIdx": resumeIdx,
            })

            if (resumeDataAtGivenIdx)
                return {
                    data: resumeDataAtGivenIdx[0],
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
}
