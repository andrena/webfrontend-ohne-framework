const context = require.context(".", true, /.*\.ts$/);
context.keys()
    .filter(key => !key.includes("index.ts"))
    .forEach(context);