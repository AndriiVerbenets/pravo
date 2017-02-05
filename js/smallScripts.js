//Open mobile nav
if ($(window).width() <= 760) {
	$(function() {
		$('.header-menu-part-opener, .header-menu-part-closer, .main-menu a').on('click', function(){
			$('.header-menu-part').toggleClass('header-menu-part-active');
			$('body').toggleClass('no-scroll-nav');
		});
	});
}

// Open prices modal
$(function() {
	$('.home-prices-list-two .home-prices-list-header, .home-prices-modal-closer').on('click', function(){
		$('.home-prices-modal-2').toggleClass('home-prices-modal-2-show');
		$('.home-prices-lists-top').toggleClass('home-prices-lists-top-noline');
		$(this).toggleClass('home-prices-list-header-active');
		if ($(window).width() <= 1024) {
			$('body').toggleClass('no-scroll');
		}
	});
});

// Form
var form;
form = function() {
	return $('.input-wrapper input').focus(function() {
		return $(this).closest('.input-wrapper').addClass('focused has-value');
	}).focusout(function() {
		return $(this).closest('.input-wrapper').removeClass('focused');
	}).blur(function() {
		if (!this.value) {
			$(this).closest('.input-wrapper').removeClass('has-value');
		}
		return $(this).closest('.input-wrapper').removeClass('focused');
	});
};
$(function() {
	return form();
});

// Interested
$(function() {
	$('.js-intrested').each(function() {
		var $accordion = $(this);

		$(".js-intrested-top", $accordion).click(function(e) {
			e.preventDefault();
			$div = $(".js-intrested-list", $accordion);
			$div.slideToggle(200);
			$(".js-intrested-list").not($div).slideUp(200);
			$div.parent(".js-intrested").toggleClass('js-intrested-active').siblings().removeClass('js-intrested-active');
			return false;
		});
	});
});

// Smooth scroll
$(document).on('click', 'a.smooth-scroll[href^="#"]', function(e) {
	var id = $(this).attr('href');
	var $id = $(id);
	if ($id.length === 0) { return; }
	e.preventDefault();
	var pos = $(id).offset().top - 72;
	$('body, html').animate({scrollTop: pos});
});

// Nav on scroll
var fixTop = $('header').offset().top + 1;
$(window).scroll(function() {
	var currentScroll = $(window).scrollTop();
	if (currentScroll >= fixTop) {
		$('header').addClass('current-scroll');
	} else {
		$('header').removeClass('current-scroll');
	}
});

// Active nav item
$(document).ready(function () {
    $(document).on("scroll", onScroll);

	//smoothscroll
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$(this).removeClass('current-menu-item');
		})
		$(this).addClass('current-menu-item');

		var target = this.hash,
		menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 72
		}, 500, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});
});

// Add active class on scroll
function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('.main-menu a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top - 200 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
		$('.main-menu a').removeClass("current-menu-item");
			currLink.addClass("current-menu-item");
		}
		else{
			currLink.removeClass("current-menu-item");
		}
	});
}
