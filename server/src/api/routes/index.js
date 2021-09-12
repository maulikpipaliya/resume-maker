import commonRouter from "./common.router.js"
import pdfRouter from "./pdf.router.js"
import resumeRouter from "./resume.router.js"
import profileRouter from "./profile.router.js"
import authRouter from "./auth.router.js"
import resumeDataRouter from "./auth.router.js"
import { errorHandler, notFound } from "../middlewares/error.middleware.js"

export const setUpRoutes = (app) => {
    app.use("/", commonRouter)
    app.use("/api/auth", authRouter)
    app.use("/downloadPdf", pdfRouter)
    app.use("/api/r", resumeRouter)
    // app.use("/api/r/:resumeIdx/", profileRouter)
    app.use("/api/r/:resumeIdx/", resumeDataRouter)

    app.use(notFound)
    app.use(errorHandler)
}
