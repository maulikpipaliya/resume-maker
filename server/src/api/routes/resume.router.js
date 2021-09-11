import { Router } from "express"
import { setBasics, getResumeData } from "../controllers/resume.controller.js"

import { authEmailValidator } from "../middlewares/resume.validator.js"
const router = Router()

router.get("/", authEmailValidator, getResumeData)
router.post("/basic", setBasics)

export default router
