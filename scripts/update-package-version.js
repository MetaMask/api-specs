const util = require("util");
const fs = require("fs");
const path = require("path");

const promisifiedFsReadFile = util.promisify(fs.readFile);
const promisifiedFsWriteFile = util.promisify(fs.writeFile);

const changeVersion = async (filePath, version) => {
  const file = await promisifiedFsReadFile(filePath);
  const json = JSON.parse(file.toString());
  json.version = version;
  return promisifiedFsWriteFile(filePath, JSON.stringify(json, null, 4) + "\n");
};
const p = path.resolve(__dirname, "..", "package.json");

changeVersion(p, process.env.NEW_VERSION).then(() => {
    console.log("wrote new version")
}).catch((err) => {
    console.error("error writing new version")
    console.error(err);
});
