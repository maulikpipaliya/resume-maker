export const config = {
    googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || "",
    serverURL: process.env.REACT_APP_SERVER_URL || "",
}

export const serverURLs = {
    login: `${config.serverURL}/api/auth/google/login`,
    allResumes: `${config.serverURL}/api/r/`,
    basicData: (idx: number) => {
        return `${config.serverURL}/api/r/${idx}/basics`
    },
        
}
