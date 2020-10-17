
//scroll equals jquery 
$(".button-header").click(function(){
	$("html,body").animate({scrollTop : $("#frame-text").position().top},900);
});


$("#backtotop").click(function(){
	$("html,body").animate({scrollTop : $("#intro-services").position().top},900);
});
