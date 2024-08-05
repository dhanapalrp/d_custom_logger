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
  DLOGS_SHOW_ERROR: true,
  DLOGS_SHOW_LOGS: true,
  DLOGS_SHOW_WARN: true,
});
```

## usage

```dosini
//commonjs

const logger = require("d_custom_logger");

//es6
import logger from "d_custom_logger";

logger.error("d_custom_logger" ,"error");// d_custom_logger error
logger.log("d_custom_logger","success"); // d_custom_logger success
logger.warn("d_custom_logger", "warn" ); // d_custom_logger warn


import {log,error,warn} from "d_custom_logger";//es6
const {log,error,warn} = require("d_custom_logger");//commonJs


error("d_custom_logger" ,"error"); // d_custom_logger error
log("d_custom_logger","success"); // d_custom_logger success
warn("d_custom_logger", "warn" ); // d_custom_logger warn

```
