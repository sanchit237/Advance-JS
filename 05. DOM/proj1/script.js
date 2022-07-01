var counter = document.getElementById('counter-value');
var followers = document.getElementById('followers-value');

let count = 1;
setInterval(() => {
	if (count < 1000){
		count++;
		counter.innerText = count;
	}
}, 1);


setTimeout(() => {
	followers.innerText = "Followers active";
}, 5500);