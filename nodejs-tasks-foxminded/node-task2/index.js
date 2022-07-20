const util = require("util");

const cp = require("child_process");

const exec = util.promisify(cp.exec);

const checkEnv = async (env) => {
  try {
    const { stdout } = await exec(env);
    console.log("stdout:", stdout);
  } catch (err) {
    console.error("stderr:", err.stderr);
    process.exit(1);
  }
};

const envToCheck = [
  "docker --version",
  "git --version",
  "npm --version",
  "nvm version",
  "node --version",
];

for (const item of envToCheck) {
  checkEnv(item);
}

process.on("SIGINT", () => {
  console.log("process exit");
  process.exit();
});
process.on("SIGTERM", () => {
  console.log("process exit");
  process.exit();
});
