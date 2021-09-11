import { Router } from "express"
import * as resumeDataController from "../controllers/resumeData.controller.js"

const router = Router()

router.get("/", resumeDataController.getResumeDataAtIndex)

router.get("/basics", resumeDataController.getBasicDetails)
router.put("/basics", resumeDataController.updateBasics)
router.delete("/basics", resumeDataController.resetBasics)

router.post("/education/", resumeDataController.addEducation)
router.put("/education/:idx", resumeDataController.updateEducation)

export default router
