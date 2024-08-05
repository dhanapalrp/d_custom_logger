const logger = require("d_custom_logger");

logger.configure({
  DLOGS_SHOW_ERROR: true,
  DLOGS_SHOW_LOGS: true,
  DLOGS_SHOW_WARN: true,
});

logger.error("test");
logger.log("test success");
logger.warn("test success");
