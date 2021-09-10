import { Router } from "express"

import {} from "../controllers/auth.controller.js"

const router = Router()

router.put("/", updateBasics)

export default router
