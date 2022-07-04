fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
	return response.json();
})
.then((data) => {
	var created = data.created_at;
	var value = data.value;
	console.log(created);
	console.log(value);
})
.catch();