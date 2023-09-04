document.getElementById("send").addEventListener("click", function (event) {
	event.preventDefault();

	const nombre = document.getElementById("name").value;
	const apellido = document.getElementById("lastname").value;
	const fecha = document.getElementById("date").value;
	const URL = "https://jsonplaceholder.typicode.com/users";

	const data = {
		nombre,
		apellido,
		fecha,
	};

	fetch(URL, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json charset = UTF-8",
		},
	})
		.then((response) => response.json())
		.then((dato) => {
			const newUser = {
				...dato,
				...data,
			};
			console.log(newUser);
		});
});
