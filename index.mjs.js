// Default values
let showError = true;
let showLogs = true;
let showWarn = true;
let showDebug = true;
let showInfo = true;
let showTrace = true;
let display = true;
// Store original console methods
const originalConsole = {
  log: console.log,
  error: console.error,
  warn: console.warn,
  debug: console.debug,
  info: console.info,
  trace: console.trace,
};

function configure(config = {}) {
  if (typeof config === "object") {
    showError = config.error !== undefined ? config.error : showError;
    showLogs = config.logs !== undefined ? config.logs : showLogs;
    showWarn = config.warn !== undefined ? config.warn : showWarn;
    showDebug = config.debug !== undefined ? config.debug : showDebug;
    showInfo = config.info !== undefined ? config.info : showInfo;
    showTrace = config.trace !== undefined ? config.trace : showTrace;
    display = config.display !== undefined ? config.display : display;
  }
}

// Override console methods
console.log = (...args) => {
  if (showLogs && display) {
    originalConsole.log(...args);
  }
};
console.error = (...args) => {
  if (showError && display) {
    originalConsole.error(...args);
  }
};
console.warn = (...args) => {
  if (showWarn && display) {
    originalConsole.warn(...args);
  }
};
console.debug = (...args) => {
  if (showDebug && display) {
    originalConsole.debug(...args);
  }
};
console.info = (...args) => {
  if (showInfo && display) {
    originalConsole.info(...args);
  }
};

console.trace = (...args) => {
  if (showInfo && display) {
    originalConsole.trace(...args);
  }
};

const logger = {
  configure,
};

export default logger;
