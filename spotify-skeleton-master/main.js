$(document).ready(function () {
	// $(".js-show-artist").on("click", fetchArtistInfo)



	$(".js-form").on("submit", fetchArtists); 
	var clicks = 0;
	 $('.btn-play').click(function(){
          if(clicks == 0){
          	$('.js-player').on('timeupdate', printTime);
          	$(".btn-play").addClass("playing");
            $('.js-player').trigger("play");
            clicks++;
          }
          else{
            $('.js-player').trigger("pause");
            $(".btn-play").removeClass("playing");
            clicks--;
            
          }
          
        });									
	});

	function printTime () {
  	var current = $('.js-player').prop('currentTime');
  	console.debug('Current time: ' + current);
  	console.log('Current time: ' + current);


  	$("progress").attr("value", current);

}


	function fetchArtists() {
	event.preventDefault();
	var searchTerm = $('.js-input').val();
	searchTerm = searchTerm.split(" ").join("+");

		$.ajax({
			type: "GET",
			url: `https://api.spotify.com/v1/search?type=track&query=${searchTerm}`,
			success: show,
			error: handleError
		});
	$('.js-input').val("");
	}

	function show(response) {
		console.log(response)
		 

	  var song =  response.tracks.items[0]
	  console.log(song)
	  createSongHtml(song);
	}
function createSongHtml (song) {
		  var image;
		  var songName = song.album.name
		  var theAuthor = song.artists[0].name
		  if (song.album.images.length > 0){
		    image = song.album.images[0].url;
		  } else {
		    image = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCk2bayZHUJsWeglTeTOvjcX3PvSpnkqU3T-6YmCE6bT1nFQ56Bw";
		  }
			
		  $(".js-audio").html(`<audio src="${song.preview_url}" class="js-player"> </audio>`)
		  $(".title").text(songName)
		  $(".author").text(theAuthor)
		  $(".cover").html(`<img src="${image}">`)


		  $(".js-show-artist").data( "artists-url", song.artists[0].href)
		};

	// function fetchArtistInfo () {
	// 		var artistURL = $(".js-show-artist").data("artists-url")	
	// 		$.ajax({
	// 			url: artistURL,
	// 			success: showModal,
	// 			error: handleError
	// 		})
	// 	}

		    
		      

function handleError (error) {
  console.log("You slipped heavy");
  console.log(error.responseText);
}

// function showModal(response) {
// 	if (response.images.length > 0) {
// 		var imageURL = response.images[0].url;
// 	}
// 	else {
// 		var imageURL =  "https://media.giphy.com/media/3o72FcL4VW0cmNfwvC/giphy.gif"
// 	}
// 	$("js-artist-name").text( response.name);
// 	$("js-artist-photo").prop( response.name);
// 	$(".js-artist-photo").prop( "src", imageUrl );
// 	$(".js-artist-followers").text( response.followers.total );
// 	$(".js-artist-pop").text( response.popularity );
// 	$(".js-artist-genres").empty();

// 	response.genres.forEach(function (theGenre) {
//     var html = `<li> ${theGenre} </li>`; })

//     $(".js-artist-genres").append(html);
//     $(".js-modal").modal("show");

//  };


	



