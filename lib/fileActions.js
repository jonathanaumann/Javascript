




"use strict";

// var x = GoTEpisodes.json.map(function (episode) {
// return episode.in


                



// class fileActions {
// constructor (title, description, episode, rating){

	var fs = require('fs');
function fileActions(theError, file){ 
    if (theError) {
        throw theError;
    }


    var episodes = JSON.parse(file);
	 episodes.forEach(file)// {
	console.log("Title:" + file.title + "Number:" file.episode_number /n file.description /n "Rating:" + episode.rating)};
}
                           
 //    episodes[range(1, 11)].forEach(episode) { 
    	


 //    var description = JSON.parse(file);
 //    episodes[range(1, 11)].forEach(episode) {

 //    	console.log(episode.description) };


 //    var rating= JSON.parse(file);
 //    episodes[range(1, 11)].forEach(episode) {
	// console.log("Rating:" + episode.rating) };

   
fs.readFile("./GoTEpisodes.json", 'utf8', fileActions);



	// this.title = title;
	// this.description = description;
	// this.episode = episode;
	// this.rating = rating;
// }
// printFormat(){
// 	console.log("Title:" + this.title +"Episode:" this.episode/n);
// 	console.log(this.description/n + "Rating:" + this.rating);
	

// 	}
// }


module.exports = fileActions;












//fs.readFile("./GoTEpisodes.json", 'utf8', fileActions);