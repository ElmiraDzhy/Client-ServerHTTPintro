const user = {
	email: "terryzero@gmail.com",
	username: "mikky",
	password: "4232hogredf",
	name: {
		firstname: "Tom",
		lastname: "Doe",
	},
	address: {
		city: "london",
		street: "7835 new road",
		number: 32,
	},
	phone: "1-570-236-7033",
};

const options = {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(user),
};

fetch(" https://fakestoreapi.com:443/users", options)
	.then((res) => res.json())
	.then(console.log);
