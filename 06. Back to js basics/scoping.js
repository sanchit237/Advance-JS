function init(){
	var firstName = "Sanchit";
	function display(){
		console.log(firstName);
	}
	return display;
}

var result = init();
result();