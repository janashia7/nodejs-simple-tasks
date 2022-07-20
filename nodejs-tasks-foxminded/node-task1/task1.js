const process = require("process");

const startDate = Date.now();
console.log("Hello world");

const message = () => {
  console.log("Goodby world");
  process.exit();
};

setTimeout(message, 10000);

const shutdown = () => {
  const dateDiff = Date.now() - startDate;
  console.log(`Stopped by user after ${Math.floor(dateDiff / 1000)} seconds`);
  process.exit();
};

process.on("SIGINT", shutdown);

process.on("SIGTERM", shutdown);
