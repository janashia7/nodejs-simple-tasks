const fs = require("fs");
const md5 = require("md5");
const { argv } = require("process");

const calc = async () => {
  const args = process.argv;
  if (args.length < 3) {
    console.log("Please add one argument");
    process.exit(1);
  } else if (args.length > 3) {
    console.log("Please type only one argument");
    process.exit(1);
  }
  try {
    const data = await fs.readFileSync(args[2], "utf8");
    console.log(md5(data));
  } catch (err) {
    console.error(err);
  }
};

calc();
