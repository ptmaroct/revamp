$(function(){
	//For navbar on mobile devices
	$(".button-collapse").sideNav();
	$(window).load(function() {
	$(".progress").fadeOut("slow");

	

	$('.card').hover(
	    function() {
	        $(this).find('> .card-image > img.activator').click();
	    }, function() {
	        $(this).find('> .card-reveal > .card-title').click();
	    }
	);	
})
});
