import { setUpExpressServer, connectToMongoDB } from "./config/index.js"
import { setUpRoutes } from "./api/routes/index.js"
import { config } from "./config/config.js"

const app = setUpExpressServer()

setUpRoutes(app)
const dbConnected = connectToMongoDB(config.dbURL)
