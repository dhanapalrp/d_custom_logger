# d_custom_logger

Globally display or hide the logs based on the configuration

## Table of Contents

- [Installation](#installation)
- [Configuration](#Configuration)
- [Usage](#Usage)

## Installation

```bash
# install (recommended)
npm i d_custom_logger@latest
```

## Configuration

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

## Usage

```dosini

Based on the configuration console will  either display logs or hide

console.error("error logs");
console.log("success logs");
console.warn("warning logs");
console.info("info logs");


```
