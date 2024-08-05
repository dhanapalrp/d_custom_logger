//commonjs

const logger = require("d_custom_logger");

//es6
// import logger from "d_custom_logger";

logger.configure({
  DLOGS_SHOW_ERROR: true,
  DLOGS_SHOW_LOGS: true,
  DLOGS_SHOW_WARN: true,
});

let data = "d_custom_logger";

logger.error("test", data);
logger.log("test success", data);
logger.warn("test success", data);
