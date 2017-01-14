$(function(){
	//For navbar on mobile devices
	$(".button-collapse").sideNav();
	$(window).load(function() {
	$(".progress").fadeOut("slow");

	//Countdown Timer
	$('#myCounter').mbComingsoon({
	expiryDate: new Date('February 17, 2017'),
	interval: 1000,       // Counter uopdate interval
	speed: 500         
	}); 	
})
});
