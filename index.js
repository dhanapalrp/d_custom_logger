const {
  DLOGS_SHOW_ERROR = true,
  DLOGS_SHOW_LOGS = true,
  DLOGS_SHOW_WARN = true,
} = process.env;

function log(data) {
  if (DLOGS_SHOW_LOGS) {
    console.log(data);
  }
}
function error(data) {
  if (DLOGS_SHOW_ERROR) {
    console.error(data);
  }
}
function warn(data) {
  if (DLOGS_SHOW_WARN) {
    console.warn(data);
  }
}

module.exports = {
  log,
  error,
  warn,
};
