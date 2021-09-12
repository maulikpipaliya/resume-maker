import { Router } from "express"

import {
    updateEducation,
    addEducation,
    getBasicDetails,
    getResumeDataAtIndex,
} from "../controllers/resumeData.controller.js"
const router = Router()

router.get("/", getResumeDataAtIndex)
router.get("/basics", getBasicDetails)

// router.put("/basics", updateBasics)

router.post("/education/", addEducation)
router.put("/education/:idx", updateEducation)

export default router
