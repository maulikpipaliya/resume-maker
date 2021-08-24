//application level configuration
import dotenv from "dotenv"
dotenv.config()
export const config = {
    port: process.env.PORT,
    baseURL: process.env.BASE_URL,
    dbURL: process.env.MONGO_URI,
}
