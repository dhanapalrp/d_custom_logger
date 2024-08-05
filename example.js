//commonjs

const logger = require("d_custom_logger");

//es6
// import logger from "d_custom_logger";

logger.configure({
  DLOGS_SHOW_ERROR: true,
  DLOGS_SHOW_LOGS: true,
  DLOGS_SHOW_WARN: true,
});

let data = "testing";

logger.error("D_CUSTOM_LOGGER error", data);
logger.log("D_CUSTOM_LOGGER log", data);
logger.warn("D_CUSTOM_LOGGER WARN", data);
