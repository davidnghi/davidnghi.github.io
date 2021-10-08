$(function(){
	var position = $('#id-skill').offset().top;
	//console.log(position);
	$('.btn-down').click(function(){
		$('body,html').animate({scrollTop:position},600);
		return false;
	})

	var pos_cm = $('#id-comment').offset().top;
	//console.log(position);
	$('.menu-comment').click(function(){
		$('body,html').animate({scrollTop:pos_cm},600);
		return false;
	})
		//Get the button
	let mybutton = document.getElementById("btn-back-to-top");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function () {
	  scrollFunction();
	};

	function scrollFunction() {
	  if (
	    document.body.scrollTop > 20 ||
	    document.documentElement.scrollTop > 20
	  ) {
	    mybutton.style.display = "block";
	  } else {
	    mybutton.style.display = "none";
	  }
	}
	// When the user clicks on the button, scroll to the top of the document
	mybutton.addEventListener("click", backToTop);

	function backToTop() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
	}
})