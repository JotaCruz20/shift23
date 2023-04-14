import log, { pino } from "pino"
import dayjs from "dayjs"
import config from "./config"

const LOG_LEVEL = config.LOG_LEVEL
const streams = [{ stream: process.stderr }]

const logger = log(
  {
    transport: {
      target: "pino-pretty",
    },
    level: LOG_LEVEL,
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format("YYYY-MM-DD+HH:mm:ss")}"`,
  },
  pino.multistream(streams, { dedupe: true })
)

export default logger
