const LOG_LEVEL = process.env.LOG_LEVEL || "debug"
const ENV = process.env.NODE_ENV || "development"
const URL_API = process.env.API || "http://localhost:8080/api" 

const api_urls = {
    api: URL_API
}

const config = {
    LOG_LEVEL: LOG_LEVEL,
    apiURL:  api_urls,
    env: ENV
}

export default config