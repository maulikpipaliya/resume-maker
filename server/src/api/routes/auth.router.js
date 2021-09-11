import { Router } from "express"

import { googleLogin } from "../controllers/auth.controller.js"
import { isAuthenticated } from "../middlewares/auth.middleware.js"

const router = Router()

router.post("/login", isAuthenticated, googleLogin)

export default router
