import userModel from "../../models/user.model.js"

export default class UserEducationService {
    async getAllEducationItems(googleId, resumeIdx) {
        try {
            const user = await userModel.findOne(
                {
                    googleId,
                    "data.resumeIdx": resumeIdx,
                },
                { "data.$": 1 }
            )
            if (!user)
                return {
                    success: false,
                    message: "User not found",
                }

            const educationDataOfUser = user.data[0].education

            if (educationDataOfUser.length > 0) {
                return {
                    success: true,
                    data: educationDataOfUser,
                    message: "Education details fetched",
                }
            } else {
                return {
                    success: false,
                    message: "Education details not found",
                }
            }
        } catch (error) {
            return {
                success: false,
                message: error.message,
            }
        }
    }

    async getEducationItem(googleId, resumeIdx, educationIdx) {
        try {
            const userEducation = await userModel.aggregate([
                { $match: { googleId: googleId } },
                { $unwind: "$data" },
                { $match: { "data.resumeIdx": parseInt(resumeIdx) } },
                { $unwind: "$data.education" },
                { $match: { "data.education.edIdx": parseInt(educationIdx) } },
                { $project: { "data.education": 1 } },
            ])

            if (userEducation && userEducation.length > 0) {
                const educationItem = userEducation[0].data.education

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

    async addEducationItem(googleId, resumeIdx, educationItem) {
        const user = await userModel.findOne({
            googleId,
            "data.resumeIdx": resumeIdx,
        })

        if (!user) {
            return res.status(400).send({
                message: "User not found",
                success: false,
            })
        }

        try {
            user.data[0].education.push(educationItem)

            await user.save()

            return {
                success: true,
                message: "Education item added",
                data: educationItem,
            }
        } catch (error) {
            return {
                success: false,
                message: error.message,
            }
        }
    }
}
