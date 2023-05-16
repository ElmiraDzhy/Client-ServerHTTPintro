const fs = require("fs/promises");
// console.log(fs);

// fs.readFile( "./text.txt", { encoding: 'utf-8' } ).then( console.log );
fs.readFile("./citadelle.txt", { encoding: "utf-8" }).then((res) => {
	const array = res.split("\n").filter((elem) => elem !== "");
	const randomIndex = Math.round(Math.random() * array.length);
	console.log(array[randomIndex]);
});

