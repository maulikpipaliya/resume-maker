import { initBasicDetailObj } from "../models/initResumeData.js"
import userModel from "../models/user.model.js"

export default class UserBasicDetailService {
    //declare class member variable

    async getBasicDetails(googleId, resumeIdx) {
        try {
            const basicDetails = await userModel.findOne({
                googleId,
                "data.resumeIdx": resumeIdx,
            })

            if (basicDetails) {
                return {
                    success: true,
                    data: basicDetails,
                    message: "Basic details found",
                }
            } else {
                return {
                    success: false,
                    message:
                        "Basic details NOT found, please check index and email again",
                }
            }
        } catch (error) {
            return {
                success: false,
            }
        }
    }

    async updateBasicDetails(authEmail, resumeIdx, basicObj) {
        try {
            const userData = await userModel.findOne({
                authEmail,
                "data.resumeIdx": resumeIdx,
            })

            userData.data[0].basics = basicObj
            const savedData = await userData.save()

            if (savedData) {
                return {
                    success: true,
                    message: "Basic details updated",
                }
            } else {
                return {
                    success: false,
                    message: "Basic details NOT updated",
                }
            }
        } catch (error) {
            return {
                success: false,
                message: "Some error occured while updating basic details",
            }
        }
    }

    async resetBasicDetails(authEmail, resumeIdx) {
        try {
            const userData = await userModel.findOne({
                authEmail,
                "data.resumeIdx": resumeIdx,
            })

            userData.data[0].basics = initBasicDetailObj
            const savedData = await userData.save()

            if (savedData) {
                return {
                    success: true,
                    message: "Basic details reset",
                }
            } else {
                return {
                    success: false,
                    message: "Basic details NOT reset",
                }
            }
        } catch (error) {
            return {
                success: false,
                message: "Some error occured while resetting basic details",
            }
        }
    }
}
