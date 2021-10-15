import userModel from "../../models/user.model.js"

export default class UserEducationService {
    async getAllEducationItems(authEmail, resumeIdx) {
        try {
            const user = await userModel.findOne(
                {
                    authEmail,
                    "data.resumeIdx": resumeIdx,
                },
                { "data.$": 1 }
            )

            if (user) {
                return {
                    success: true,
                    data: user.data[0].education,
                    message:
                        user.data[0].education.length === 0 ? "ArrayEmpty" : "",
                }
            }
            return {
                success: false,
                message: "User not found",
            }
        } catch (error) {
            return {
                success: false,
                message: error.message,
            }
        }
    }

    async getEducationItem(authEmail, resumeIdx, educationIdx) {
        try {
            const user = await userModel.findOne(
                {
                    authEmail,
                    "data.resumeIdx": resumeIdx,
                    "data.education.edIdx": educationIdx,
                },
                { "data.education.$": 1 }
            )

            console.log("user")
            console.log(user)

            if (user) {
                const educationItem = user.data[0].education[0]

                console.log("educationItem")
                console.log(educationItem)
                if (educationItem) {
                    return {
                        success: true,
                        data: educationItem,
                    }
                }
                return {
                    success: false,
                    message: "EducationItem not found",
                }
            }
            return {
                success: false,
                message: "Record doesn't exist",
            }
        } catch (error) {
            return {
                success: false,
                message: error.message,
            }
        }
    }
}
