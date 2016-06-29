var colorsArray= ["indigo", "purple", "black", "green", "purple", "indigo", "green", "purple", "scarlet", "indigo", "purple"];

function countColors (color, theArray) {
	var counter;		
	var occur = 0;


	for (counter = 0; counter < theArray.length; counter++) {
		var colorsFromArray = theArray[counter];
		if (colorsFromArray === color) {
	occur += 1;
			
		}
	}
	
return occur;
}


console.log("Testing our function");


console.log( countColors("green", colorsArray) === 2);


console.log( countColors("indigo", colorsArray) === 3);

console.log( countColors("black", colorsArray) === 1);

console.log( countColors("purple", colorsArray) === 4);

console.log( countColors("pink", colorsArray) === 0);


