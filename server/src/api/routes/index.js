import commonRouter from "./common.router.js"
import pdfRouter from "./pdf.router.js"
import resumeRouter from "./resume.router.js"

import authRouter from "./auth.router.js"
import resumeDataRouter from "./profile.router.js"
import basicRouter from "./basic.router.js"
import educationRouter from "./education.router.js"
import { errorHandler, notFound } from "../middlewares/error.middleware.js"

export const setUpRoutes = (app) => {
    app.use("/", commonRouter)
    app.use("/api/auth", authRouter)
    app.use("/downloadPdf", pdfRouter)
    app.use("/api/r", resumeRouter)
    // app.use("/api/r/:resumeIdx/", resumeDataRouter)
    app.use("/api/r/:resumeIdx/basics", basicRouter)
    app.use("/api/r/:resumeIdx/education", educationRouter)

    app.use(notFound)
    app.use(errorHandler)
}
