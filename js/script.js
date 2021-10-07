$(function(){
	var position = $('#id-skill').offset().top;
	console.log(position);
	$('.btn-down').click(function(){
		$('body,html').animate({scrollTop:position},600)
	})
})