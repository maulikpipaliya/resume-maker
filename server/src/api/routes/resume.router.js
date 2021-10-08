import { Router } from "express"
import { setBasics, getAllResumes } from "../controllers/resume.controller.js"
import { isAuthenticated } from "../middlewares/auth.middleware.js"

import { authEmailValidator } from "../middlewares/resume.validator.js"
const router = Router()

/**
 * @description Get all resumes for particular user
 */
router.get("/", isAuthenticated, getAllResumes)
router.post("/basic", setBasics)

export default router
