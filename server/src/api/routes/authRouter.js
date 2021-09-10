import { Router } from "express"

import { googleLogin } from "../controllers/auth.controller.js"

const router = Router()

router.post("/login", googleLogin)

export default router
