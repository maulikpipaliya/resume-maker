import { Router } from "express"
import { getResume, getAllResumes } from "../controllers/resume.controller.js"
import { isAuthenticated } from "../middlewares/auth.middleware.js"

import { authEmailValidator } from "../middlewares/resume.validator.js"
const router = Router({
    mergeParams: true,
})

/**
 * @description Get all resumes for particular user
 */
router.get("/", isAuthenticated, getAllResumes)
router.get("/:resumeIdx", isAuthenticated, getResume)

export default router
