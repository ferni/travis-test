var fs = require("fs");

fs.mkdirSync("./dist");
fs.writeFileSync("./dist/index.html", "This is the built site!");