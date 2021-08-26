import commonRouter from "./commonRouter.js"
import pdfRouter from "./pdfRouter.js"
import resumeRouter from "./resumeRouter.js"

export const setUpRoutes = (app) => {
    app.use("/", commonRouter)
    app.use("/downloadPdf", pdfRouter)
    app.use("/setData", resumeRouter)
}
