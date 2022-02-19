import { initBasicDetailObj } from "../../models/initResumeData.js"
import userModel from "../../models/user.model.js"

export default class UserBasicDetailService {
    //declare class member variable

    async getBasicDetails(googleId, resumeIdx) {
        try {
            const { data: basicDetails } = await userModel.findOne({
                googleId,
                "data.resumeIdx": resumeIdx,
            })

            if (basicDetails) {
                return {
                    success: true,
                    data: basicDetails[0].basics,
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

    async updateBasicDetails(googleId, resumeIdx, basicObj) {
        try {
            const userData = await userModel.findOne({
                googleId,
                "data.resumeIdx": resumeIdx,
            })
            
            console.log(
                "🚀 ~ file: basicDetail.service.js ~ line 40 ~ UserBasicDetailService ~ updateBasicDetails ~ userData",
                userData
            )

            userData.data[resumeIdx].basics = basicObj
            console.log(
                "🚀 ~ file: basicDetail.service.js ~ line 42 ~ UserBasicDetailService ~ updateBasicDetails ~ basicObj",
                basicObj
            )
            const savedData = await userData.save()
            console.log(
                "🚀 ~ file: basicDetail.service.js ~ line 43 ~ UserBasicDetailService ~ updateBasicDetails ~ savedData",
                savedData
            )

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
                message:
                    "Some error occured while updating basic details. Please check authenticaion/ index again",
            }
        }
    }

    async resetBasicDetails(googleId, resumeIdx) {
        try {
            const userData = await userModel.findOne({
                googleId,
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
