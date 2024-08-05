# d_custom_logger

Globally display or hide the logs based on the configuration

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

## Installation

```bash
# install (recommended)
npm i d_custom_logger@latest
```

## configuration

Configure logger at the root of the project:

```dosini
//commonjs

const logger = require("d_custom_logger");

//es6
import logger from "d_custom_logger";

logger.configure({
  display: true, //globally hide all logs
  log: true,
  error: true,
  warn: true,
  debug: true,
  info: true,
  trace: true,
});

```

## usage

```dosini
Based on the configuration console will display output

console.error("D_CUSTOM_LOGGER error", data);
console.log("D_CUSTOM_LOGGER log", data);
console.warn("D_CUSTOM_LOGGER WARN", data);

```
