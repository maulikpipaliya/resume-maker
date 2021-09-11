import { Router } from "express"

import {
    downloadPDF,
    sampleDownloadFromURL,
} from "../controllers/pdf.controller.js"
const router = Router()

router.get("/", downloadPDF)
router.get("/sample", sampleDownloadFromURL)

export default router
