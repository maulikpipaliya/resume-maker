//application level configuration
import dotenv from "dotenv"

const { parsed: configENV } = dotenv.config()

export const config = {
    port: process.env.PORT,
    serverURL: process.env.SERVER_URL,
    dbURL: process.env.MONGO_URI,
    googleCallbackURL: `${process.env.SERVER_URL}/api/auth/google/callback`,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    cookieKey: process.env.COOKIE_KEY,
    corsOrigin: process.env.CLIENT_URL,
}
