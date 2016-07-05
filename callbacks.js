var colorsArray = ["chartreuse", "indigo", "orange", "black"]
"use strict";

//named 
function printColor(color) {
	console.log(color);
}

colorsArray.forEach(printColor);

function printStuff() {
	console.log("10 secs over!!")
}

setTimeout(printStuff, 10000); () {
	console.log("10 sec over!");
}, 10000)

console.log("\nTimer\n");

//anon style
colorsArray.forEach(function (color) {
	console.log(color.toUpperCase());
});
console.log("\nEnd of program")








