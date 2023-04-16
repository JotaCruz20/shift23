const LOG_LEVEL = process.env.LOG_LEVEL || "debug"
const ENV = process.env.NODE_ENV || "development"
const URL_API = process.env.API || "https://6645-94-61-75-3.ngrok-free.app/" 

const api_urls = {
    api: URL_API
}

const config = {
    LOG_LEVEL: LOG_LEVEL,
    apiURL:  api_urls,
    env: ENV
}

export default config