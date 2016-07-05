"use strict";

var read = require('read');

var Question = require("./question.js")
var server = require("./server.js")


class Quiz {
	constructor (array) {
		this.array = array
		this.index = 0 
	}
	takeQuiz () {
		var	options = {
	   	 prompt: this.array[this.index].text 
		}
		read(options, displayAnswer.bind(this))

		function displayAnswer (err, answer){
			if (answer === this.array[this.index].answer) {
			    console.log("Correct")
			    this.index ++ 
			    return takeQuiz(); }
			if (answer !== this.array[this.index].answer) {
				console.log("Incorrect")
				return takeQuiz(); }

	}

	// 		var options = {
	// 	    prompt: this.array[1].text 
	// 	}
	// read(options, displayAnswer.bind(this))

	// function displayAnswer2 (err, answer){
		// if (answer === this.array[1].answer) {
	 //    console.log("Correct") }
		// if (answer !== this.array[1].answer) {
		// console.log("Incorrect")
		// throw err;
	}	
}
		


module.exports = Quiz;
