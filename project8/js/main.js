
//scroll equals jquery 
$(".over,.mytu").click(function() {
	$("html,css").animate({scrollTop: $("html,body").position().top},900)
})

$(".music").click(function() {
	$("html,css").animate({scrollTop: $(".Music").position().top},900)
})

$(".video").click(function() {
	$("html,css").animate({scrollTop: $(".Movie").position().top},900)
})

$(".gift").click(function() {
	$("html,css").animate({scrollTop: $(".GiftCards").position().top},900)
})


// Responsive Nav
$(function() {
	menu = $('header ul');

	$('#openup').on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function() {
		var w = $(this).width();
		if (w > 480 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	$('header li').on('click', function(e) {
		var w = $(window).width();
		if (w < 480) {
			menu.slideToggle();
		}
	});
	$('.open-menu').height($(window).height());
});


//scroll nav ul li a
// $('header a').on('click', function(event) {
// 	if (this.hash !== '') {
// 		event.preventDefault();

// 		const hash = this.hash;

// 		$('html, body').animate(
// 		{
// 			scrollTop: $(hash).offset().top
// 		},
// 		800,
// 		function() {
// 			window.location.hash = hash;
// 		}
// 		);
// 	}
// });
