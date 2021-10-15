import { Router } from "express"

import {
    updateEducation,
    addEducation,
    getBasicDetails,
    getResumeDataAtIndex,
} from "../controllers/resumeData.controller.js"
const router = Router()

router.post("/", addEducation)
router.put("/:idx", updateEducation)

export default router
