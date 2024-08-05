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
const logger = require("d_custom_logger");

logger.configure({
  DLOGS_SHOW_ERROR: true,
  DLOGS_SHOW_LOGS: true,
  DLOGS_SHOW_WARN: true,
});
```

## usage

```dosini
const logger = require("d_custom_logger");

logger.error("test");
logger.log("test success");
logger.warn("test success");
```
