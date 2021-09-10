import commonRouter from "./commonRouter.js"
import pdfRouter from "./pdfRouter.js"
import resumeRouter from "./resumeRouter.js"
import profileRouter from "./profileRouter.js"
import authRouter from "./authRouter.js"

export const setUpRoutes = (app) => {
    app.use("/", commonRouter)
    app.use("/api/auth", authRouter)
    app.use("/downloadPdf", pdfRouter)
    app.use("/setData", resumeRouter)
    app.use("/api/profile", profileRouter)
}
