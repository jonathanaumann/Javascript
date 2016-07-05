class Animal {
constructor (name, noise) {
	this.name = name;
	this.noise = noise;
}
shout () {
	console.log("moo")
}
makeNoise () {
	console.log(this.noise +"!!!")
	}
}

module.exports = Animal;