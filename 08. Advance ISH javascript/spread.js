//Spread Operator
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

//Rest operator

function sub(...args) {
	let sum = 0;
	for (const result of args) {
		sum += result;
	}
	return sum;
}


console.log(sub(1,5,6));