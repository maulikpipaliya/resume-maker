import { Router } from "express"

import { updateBasics } from "../controllers/profile.controller.js"

const router = Router()

router.put("/", updateBasics)

export default router
