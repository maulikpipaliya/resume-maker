//application level configuration
export const config = {
    port: process.env.PORT || 3000,
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    dbURL:
        process.env.MONGO_URI ||
        "mongodb+srv://rm-maulik:L3wHUK89XWLl5zUb@db-resume-maker.xjflx.mongodb.net/db-resume-maker",
}
