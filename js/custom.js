$(function(){
	//For navbar on mobile devices
	$(".button-collapse").sideNav();

	//For Countdown
	var startDate = new Date();
	// Do your operations
	var endDate   = new Date('February 17, 2017');
	var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

	var clock = $('.clock').FlipClock(seconds, {
			clockFace: 'DailyCounter',
			countdown: true
		});
});
