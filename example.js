//commonjs

const logger = require("d_custom_logger");

//es6
// import logger from "d_custom_logger";

logger.configure({
  log: true,
  error: true,
  warn: true,
  debug: true,
  info: true,
  trace: true,
  display: true, //globally off all logs
});

let data = "testing";

console.error("D_CUSTOM_LOGGER error", data);
console.log("D_CUSTOM_LOGGER log", data);
console.warn("D_CUSTOM_LOGGER WARN", data);
