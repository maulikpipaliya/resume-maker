import { setUpExpressServer } from "./config/index.js"
import { setUpRoutes } from "./api/routes/index.js"

const app = setUpExpressServer()

setUpRoutes(app)
