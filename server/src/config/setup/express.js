import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { config } from "../config.js"

export const setUpExpressServer = () => {
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors())
    app.use(express.static("../src/templates/style"))

    app.listen(config.port, () => {
        console.log(`server started at http://localhost:${config.port}`)
    })
    return app
}
