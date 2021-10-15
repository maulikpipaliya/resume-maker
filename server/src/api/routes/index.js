import commonRouter from "./common.router.js"
import pdfRouter from "./pdf.router.js"
import resumeRouter from "./resume.router.js"

import authRouter from "./auth.router.js"
import resumeDataRouter from "./profile.router.js"
import basicDataRouter from "./basic.router.js"
import educationDataRouter from "./education.router.js"
import { errorHandler, notFound } from "../middlewares/error.middleware.js"

export const setUpRoutes = (app) => {
    app.use("/", commonRouter)
    app.use("/api/auth", authRouter)
    app.use("/downloadPdf", pdfRouter)
    app.use("/api/r", resumeRouter)
    app.use("/api/r/:resumeIdx/", resumeDataRouter)
    app.use("/api/r/:resumeIdx/basics", basicDataRouter)
    app.use("/api/r/:resumeIdx/education", educationDataRouter)

    app.use(notFound)
    app.use(errorHandler)
}
