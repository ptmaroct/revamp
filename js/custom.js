$(function(){
	//For navbar on mobile devices
	$(".button-collapse").sideNav();

	//For Countdown
	var startDate = new Date();
	// Do your operations
	var endDate   = new Date('February 17, 2017');
	var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

	$('#myCounter').mbComingsoon({
	expiryDate: new Date('February 17, 2017'),
	interval: 1000,       // Counter uopdate interval
	speed: 500         
	}); 
});
