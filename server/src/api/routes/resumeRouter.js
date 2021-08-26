import { Router } from "express"
import { setBasics } from "../controllers/resume.controller.js"
const router = Router()

router.post("/basic", setBasics)

export default router
