var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";"; 
}

setGradient();

function getRandomColor() {
	var hex = "0123456789ABCDEF";
	var color = "#";

	for ( var i = 0; i < 6; i++) {
		color = color + hex[Math.floor(Math.random() * 16)];
		console.log(color); 
	}
	return color;
}

function randomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomColors);





