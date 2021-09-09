import commonRouter from "./commonRouter.js"
import pdfRouter from "./pdfRouter.js"
import resumeRouter from "./resumeRouter.js"
import profileRouter from "./profileRouter.js"

export const setUpRoutes = (app) => {
    app.use("/", commonRouter)
    app.use("/downloadPdf", pdfRouter)
    app.use("/setData", resumeRouter)
    app.use("/api/profile", profileRouter)
}
