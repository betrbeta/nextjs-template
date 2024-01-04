import pino from 'pino';
// import pretty from 'pino-pretty'

const logger = pino({
  browser: {},
  level: process.env.NEXT_PUBLIC_PINO_LOG_LEVEL,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      timestampKey: 'time',
      translateTime: true, // Human-readable timestamps
    },
  },
  base: {
    env: process.env.NODE_ENV,
    revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
  },
});
/*const logger = pino({
  level: process.env.NEXT_PUBLIC_LOG_LEVEL,
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
    bindings: (bindings) => {
      return { host: bindings.hostname };
    },
  },
  transport: {
    target: 'pino-pretty',
  },
});*/
export default logger;
