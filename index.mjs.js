let showError = true;
let showLogs = true;
let showWarn = true;

export function configure(config = {}) {
  if (typeof config === "object") {
    showError =
      config.DLOGS_SHOW_ERROR !== undefined
        ? config.DLOGS_SHOW_ERROR
        : showError;
    showLogs =
      config.DLOGS_SHOW_LOGS !== undefined ? config.DLOGS_SHOW_LOGS : showLogs;
    showWarn =
      config.DLOGS_SHOW_WARN !== undefined ? config.DLOGS_SHOW_WARN : showWarn;
  }
}

export function log(...data) {
  showLogs && console.log(...data);
}

export function error(...data) {
  showError && console.error(...data);
}

export function warn(...data) {
  showWarn && console.warn(...data);
}
