const {
  DLOGS_SHOW_ERROR = "true",
  DLOGS_SHOW_LOGS = "true",
  DLOGS_SHOW_WARN = "true",
} = process.env;

const showError = DLOGS_SHOW_ERROR === "true";
const showLogs = DLOGS_SHOW_LOGS === "true";
const showWarn = DLOGS_SHOW_WARN === "true";

function log(data) {
  showLogs && console.log(data);
}

function error(data) {
  showError && console.error(data);
}

function warn(data) {
  showWarn && console.warn(data);
}

module.exports = {
  log,
  error,
  warn,
};
