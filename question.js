"use strict";
var generateId = require("./id.js")

class Question {
	constructor (text, answer) {
		this.text = text;
		this.answer = answer;
		this.id = generateId();
	};	
}


 // generateId() { return id++; };

 //    Object.prototype.id = function() {
 //        var newId = generateId();

 //        this.id = function() { return newId; };

 //        return newId;
 //    };

	// }; 






module.exports = Question;