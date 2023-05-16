const fs = require("fs/promises");

async function appendText(path) {
	const date =  Date.now();
	await fs.appendFile(path, `Some error happens at ${date} \n`, "utf-8");
}

setInterval(() => appendText("./myfile.txt"), 1000);

