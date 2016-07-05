"use strict";

var Question = require("./question.js")
var Quiz = require("./quiz.js")


var question1 = new Question("What's the capital of America?", "Washington DC")

var question2 = new Question("What year did America become Independent", "1776")
 var quizarray = [question1, question2]

var quiz = new Quiz(quizarray);

console.log(quiz.takeQuiz());


