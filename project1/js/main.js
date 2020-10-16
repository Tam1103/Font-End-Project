
// scroll in web use jsbasic none framework
$('.fa').on('click',function(){
	const images = $('.navigation').position().top;

	$('html,body').animate({
		scrollTop: images
	},450);
});


$('.view-work1').on('click',function(){
	const images = $('.navigation').position().top;

	$('html,body').animate({
		scrollTop: images
	},900);
});