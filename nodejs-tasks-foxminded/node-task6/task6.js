const fs = require("fs");
const { argv } = require("process");
const args = process.argv;

if (args.length < 3) {
  console.log("add argument in command line");
  process.exit(1);
} else if (args.length > 3) {
  console.log("type only one argument in command line");
  process.exit(1);
}

fs.readFile(`${args[2]}`, "utf8", (err) => {
  if (err) {
    console.error(err);
  }
});
