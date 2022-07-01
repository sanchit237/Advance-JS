const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const bg = (element) => {
	return window.getComputedStyle(element).background;
}

console.log(bg(cyan));