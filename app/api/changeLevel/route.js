const logger = require("../../../logger");
// const logger = require("../../../lib/logger/logger")
// const logger = require("../../../lib/logger/winston-logger")

export async function POST(request) {
  const {level} = await request.json();
  const validLevels = ["fatal", "error", "warn", "info", "debug", "trace", "silent"];

  if (validLevels.includes(level)) {
    logger.level = level;
    console.log(logger.level);
    // logger.default.level = level;
    // console.log(logger.default.level);
    return Response.json({message: `Log level changed to ${level}`});
  } else {
    return Response.json({error: "Invalid log level"});
  }
}
