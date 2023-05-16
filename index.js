const fs = require("fs/promises");

fs.readFile("./citadelle.txt", { encoding: "utf-8" }).then((res) => {
	const array = res.split("\n").filter((elem) => elem !== "");
	const randomIndex = Math.round(Math.random() * array.length - 1);
	fs.appendFile( "./append.txt", array[ randomIndex ] + '\n', 'utf-8' );
	// fs.appendFile('./append.txt', '\n', 'utf-8')
});

