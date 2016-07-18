$(document).ready(function () {
	$(".js-form").on("submit", fetchArtists); });

	function fetchArtists() {
	event.preventDefault();
	var searchTerm = $('.js-input').val();
	searchTerm = searchTerm.split(" ").join("+");

		$.ajax({
			type: "GET",
			url: `https://api.spotify.com/v1/search?type=artist&query=${searchTerm}`,
			success: show,
			error: handleError
		});
	$('.js-input').val("");
	}

	function show(response) {
		 $(".js-artist-list").empty();

	  response.artists.items.forEach(function (artist) {
	    createArtistHtml(artist);
	  });
	}
function createArtistHtml (artist) {
		  var image;

		  if (artist.images.length > 0){
		    image = artist.images[0].url;
		  } else {
		    image = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCk2bayZHUJsWeglTeTOvjcX3PvSpnkqU3T-6YmCE6bT1nFQ56Bw";
		  }

		  var html = `
		    <li class="item">
		      <h4> ${artist.name} </h4>
		      <img class="artist-image" src="${image}">
		      <button class="albums-btn js-artist-albums" data-blah="${artist.id}">
		        Show albums for ${artist.name}
		      </button>
		    </li>
		  `;

		  $(".js-artist-list").append(html);
}
function handleError (error) {
  console.log("You slipped heavy");
  console.log(error.responseText);
}

