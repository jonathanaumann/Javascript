
$(document).ready(function () {
	$(".btn-pepperonni").on("click",function () {
		$(".pep").toggle();
		$(".btn-pepperonni").toggleClass("active");
		updatePrice();
	});
	}
	$(".btn-green-peppers").on("click",function () {
		$('.green-pepper').toggle();
		$(".btn-green-peppers").toggleClass("active");
		updatePrice();
	});
	$(".btn-mushrooms").on('click', function () {
		$('.mushroom').toggle();
		$(".btn-mushrooms").toggleClass("active");
		updatePrice();	
	});
	$(".btn-sauce").on('click', function () {
		$(".js-sauce-wrapper").toggleClass("sauce-white");
		$(".btn-sauce").toggleClass("active");
		updatePrice();
	});
	$(".btn-crust").on('click', function () {
		$('.js-crust-wrapper').toggleClass("crust-gluten-free");
		$('.btn-crust').toggleClass("active");
		updatePrice();
	}

		function updatePrice() {
		var price = 10;
		if ($(".btn-pepperonni").hasClass("active") ) {
			price += 1
		}
		if ($(".btn-mushrooms").hasClass("active") ) {
			price += 1;
		}
		if ($(".btn-green-peppers").hasClass("active") ) {
			price += 1;
		}
		if ($(".btn-sauce").hasClass("active") ) {
			price += 3;
		}
		if ($(".btn-crust").hasClass("active") ) {
			price += 5;
		$('.js-total-price').html("$" + price);
		}


// 	console.log("the doc is ready ");
// 	// body...
// });


// function gpepper (){
// $('.green-pepper').toggle()



// function pepperoni (){
// $('.pep').toggle()
// }
// $(".btn-pepperonni").click(pepperoni);

// function mushroom (){

// }
// $



// function sauce (){
// $('.sauce').toggle()
// }
// $(".btn-sauce").click(sauce);





// function crust(){
// $(".crust").toggleClass('crust-gluten-free');
// }
// $(".btn-crust").click(crust);

