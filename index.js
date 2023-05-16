const fs = require("fs/promises");
// console.log(fs);

fs.readFile("./text.txt", {encoding: 'utf-8'}).then(console.log);
