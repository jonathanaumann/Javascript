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


module.exports = countColors;