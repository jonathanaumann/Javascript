

"use strict";

var Animal = require("./lib/animal.js")
var Car = require("./lib/car.js")

// How to create classes with functions



// function Animal (name, noise) {
// 	this.name = name;
// 	this.noise = noise;
// }

// Animal.prototype.shout = function() {
// 	console.log("Moooo");
// };
// Animal.prototype.makeNoise= function() {
// 	console.log(this.noise + "!!!")
// };



// How to create classes with methods the nice way in amnial.js


var shadow = new Animal("Shadow", "Rufff");
var princess = new Animal("Princess", "meow")
var ford = new Car("Ford-Fiesta", "Rataata")


console.log(shadow.name);
console.log(princess.name);
princess.shout();
princess.makeNoise();
shadow.shout();
shadow.makeNoise();


ford.makeNoise();













