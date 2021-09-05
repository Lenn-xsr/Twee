const { readdirSync, statSync } = require("fs");
const { join } = require("path");

const walkSync = (d) =>
  statSync(d).isDirectory()
    ? readdirSync(d).map((f) => walkSync(join(d, f)))
    : d;

module.exports = { walkSync };
