# d_custom_logger

Customize the loggings based on the environment variables
example:Turn off logs based on env variables

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

Create a `.env` file in the root of your project :add these env variables

```env
DLOGS_SHOW_ERROR=false
DLOGS_SHOW_LOGS=true
DLOGS_SHOW_WARN=true
```

## usage

```dosini
const logger = require("d_custom_logger");

logger.error("test");
logger.log("test success");
logger.warn("test success");
```
