import commonRouter from "./commonRouter.js"
import pdfRouter from "./pdfRouter.js"

export const setUpRoutes = (app) => {
    app.use("/", commonRouter)
    app.use("/download-pdf", pdfRouter)
}
