

"use strict";

$(document).ready(function () {
	$(".js-character-form").on("submit", function (event) {
		// body...
		event.preventDefault();
		newCharacter();
		fetchCharacters();
	
	});


function newCharacter() {	
	event.preventDefault();	

	var newData = {
		name: $('.js-name').val(),
		occupation: $('.js-occ').val(),
		weapon: $('.js-weapon').val()
	};
	
	$.ajax({
		type: "POST",
		url: "https://ironhack-characters.herokuapp.com/characters",
		data: newData,
		success: showNew,
		error: handleError

	});
	function showNew() {
	var theName = $('.js-name').val();
	var theOccupation = $('.js-occ').val();
	var theWeapon = $('.js-weapon').val();
	var newChar = `
		<li>
			<h3> ${theName} </h3>
			<ul>
			<li> Occupation: ${theOccupation} </li>
			<li> Weapon: ${theWeapon} </li>
			</ul>
		</li> `;

		$('.js-character-list').append(newChar);

	}
	function handleError (error) {
			console.log("ERROR")
			// body...
			console.log("error.responseText")
		}
	




}





	function fetchCharacters () {
		$.ajax({
			type: "GET",
			url: "https://ironhack-characters.herokuapp.com/characters",
			success: showCharacters,
			error: handleError });
		
	function showCharacters(response) {
			
			var arrayC = response;
			arrayC.forEach(function (theCharacter) {
		    var html =`
		<li>
			<h3> ${theCharacter.name} </h3>
			<ul>
			<li> Occupation: ${theCharacter.occupation} </li>
			<li> Weapon: ${theCharacter.weapon} </li>
			</ul>
		</li> `;
		    $('.js-character-list').append(html);
		  });
		}


	function handleError (error) {
			console.log("ERROR")
			// body...
			console.log("error.responseText")
		}
	}
});









		// 	$.ajax(
		// 		type: "POST",
		// 		url: "https://ironhack-characters.herokuapp.com/characters",
		// 		data:$(".js-character-form")
		// 		success: showCharacters,
		// 		error: handleError,
		// 	function showCharacters(charactersArray) {
		// 		console.log("success")
		// 		var arrayC = response;
		// 		arrayC.forEach(function (theCharacter) {
  //   var html = "<li>" + theCharacter.name + "</li>";
  //   $('.js-character-list').append(html);
  // });


		// 	}
		// 	function handleError (error) {
		// 		console.log("ERROR")
		// 		// body...
		// 		console.log("error.responseText")
		// 	}
			


//    var httpRequest.open("GET", "https://ironhack-characters.herokuapp.com/characters");
//    httpRequest.onreadystatechange= handleResponse;
//    httpRequest.send();
//     }
  
//     function showChars (charsArray) {
//       charsArray.forEach(function (char) {
//         var html = "<h1>" + char.weapon + "</h1>";
//         $(".container").append(html);
//         console.log(char);
//       });
//     }
// function handleResponse (event) {
//   var httpRequest = event.currentTarget;
//     if (httpRequest.readyState === 4) {
//       if (httpRequest.status === 200) {
//         console.log("--- without jQuery ---");
//         showChars(JSON.parse(httpRequest.responseText));
//     }
//     else {
//     alert("There was an error")
//       }
//      }
//     } 
// });
//   ${fetchChars();}
// 	});
// });


//   $(document).ready(function () {
   
// </script>

// // function doStuffOnClick() {
// // 	// body...
// // 	alert("YOU CLICKED SMH");
// // }
// // $(".js-alert").on("click", doStuffOnClick);
// // console.log( $(".js-alert")  );
// // console.log( $(".js-alert").length );
// // });


// // var Animal = require("./lib/animal.js")
// // var Car = require("./lib/car.js")

// // How to create classes with functions



// // function Animal (name, noise) {
// // 	this.name = name;
// // 	this.noise = noise;
// // }

// // Animal.prototype.shout = function() {
// // 	console.log("Moooo");
// // };
// // Animal.prototype.makeNoise= function() {
// // 	console.log(this.noise + "!!!")
// // };



// // How to create classes with methods the nice way in amnial.js


// // var shadow = new Animal("Shadow", "Rufff");
// // var princess = new Animal("Princess", "meow")
// // var ford = new Car("Ford-Fiesta", "Rataata")


// // console.log(shadow.name);
// // console.log(princess.name);
// // princess.shout();
// // princess.makeNoise();
// // shadow.shout();
// // shadow.makeNoise();


// // ford.makeNoise();













