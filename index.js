const fs = require("fs/promises");

let file;

fs.readFile("./append.txt", { encoding: "utf-8" }).then((res) => {
	fs.writeFile("./newFileForTask", `${res} \n my text \n `);
});

