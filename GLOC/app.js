$(document).ready(function () {
	console.log("the doc is ready fready");


	if ("geolocation" in navigator) {
		console.log("Browser had geolocation");
		navigator.geolocation.getCurrentPosition( showPosition, handleError );
	}
	else {
		console.log("Browser doesnt have geolocation. :(");
		var html = `
		<h2> Update asap nigga </h2> ` ;
		$("body").append(html);

	}
});
function showPosition (position) {
	console.log("YOu have the users location MUAHHAHAHAHA")
	console.log(position);
	var lat = position.coords.latitude;
	var long = position.coords.longitude;

	var html = ` <h2>Your position lmao I KNOW WHERE YOU ARE </h2>
	<img src="https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&size=640x400&zoom=15">
		<ul>
			<li> Latitude: ${lat} </li>
			<li> Longitude: ${long} </li>
		</ul> `;
	$("body").append(html);
	}
function handleError (e) {
console.log("error when getting the position")
console.log(e);
if (e.code === 1) {
	var html = 	`<h2> come on! give me your location NOW! </h2>`;
	$("body").append(html);
	}

}