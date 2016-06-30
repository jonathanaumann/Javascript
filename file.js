
var countColors = require("./count-colors.js")




var colorsArray= ["indigo", "purple", "black", "green", "purple", "indigo", "green", "purple", "scarlet", "indigo", "purple"];



console.log("Testing our function");


console.log( countColors("green", colorsArray) === 2);


console.log( countColors("indigo", colorsArray) === 3);

console.log( countColors("black", colorsArray) === 1);

console.log( countColors("purple", colorsArray) === 4);

console.log( countColors("pink", colorsArray) === 0);

function averageColon(numbers) {
var arr = numbers.split(":")
var total = 0;
var	avg;

arr.forEach(function (number) {
	total += parseInt(number);
});

 
return avg = total/(arr.length);


}

var numbers = "80:70:90:100";
console.log( averageColon(numbers));


