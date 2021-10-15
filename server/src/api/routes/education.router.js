import { Router } from "express"
import { EducationController } from "../controllers/index.js"

import { EducationService } from "../services/index.js"

import {
    updateEducation,
    addEducation,
    getBasicDetails,
    getResumeDataAtIndex,
} from "../controllers/resumeData.controller.js"
const router = Router({
    mergeParams: true,
})

router.route("/").get(EducationController.getAllEducationItems)

router.post("/", addEducation)
router.put("/:idx", updateEducation)

export default router
