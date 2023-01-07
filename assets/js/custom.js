(function($) {
	/*==========  background  ==========*/
	$("[data-background]").each(function() {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
	/*========== menu-bar sticky  ==========*/
	$(window).on('scroll', function() {
		var scrollDown = $(window).scrollTop();
		if(scrollDown < 135) {
			$(".header__sticky").removeClass("header__sticky-sticky-menu");
		} else {
			$(".header__sticky").addClass("header__sticky-sticky-menu");
		}
	});
	/*==========  Search  ==========*/
	$('.header__area-menubar-right-box-search-icon.open').on('click', function() {
		$('.header__area-menubar-right-box-search-box').fadeIn().addClass('active');
	});
	$('.header__area-menubar-right-box-search-box-icon').on('click', function() {
		$(this).fadeIn().removeClass('active');
	});
	$('.header__area-menubar-right-box-search-box-icon i').on('click', function() {
		$('.header__area-menubar-right-box-search-box').fadeOut().removeClass('active');
	});
	$('.header__area-menubar-right-box-search-box form').on('click', function(e) {
		e.stopPropagation();
	});
	/*==========  sidebar popup  ==========*/
	$('.header__area-menubar-right-box-sidebar-popup-icon i').on("click", function() {
		$('.header__area-menubar-right-box-sidebar-popup').addClass('active');
	});
	$('.header__area-menubar-right-box-sidebar-popup .sidebar-close-btn').on("click", function() {
		$('.header__area-menubar-right-box-sidebar-popup').removeClass('active');
	});
	$('.header__area-menubar-right-box-sidebar-popup-icon i').on("click", function() {
		$('.sidebar-overlay').addClass('show');
	});
	$('.header__area-menubar-right-box-sidebar-popup .sidebar-close-btn').on("click", function() {
		$('.sidebar-overlay').removeClass('show');
	});
	// /*========== Responsive Menu  ==========*/
	$('.menu-responsive').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="fal fa-times"></i>'
	});
	/*==========  counterUp  ==========*/
	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});
	/*========== FAQ  ==========*/
	$(".faq__area-left-item-card-header").click(function() {
		if($(this).next(".faq__area-left-item-card-header-content").hasClass("active")) {
			$(this).next(".faq__area-left-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("fal fa-minus").addClass("fal fa-plus")
		} else {
			$(".faq__area-left-item-card-header-content").removeClass("active").slideUp()
			$(".faq__area-left-item-card-header i").removeClass("fal fa-minus").addClass("fal fa-plus");
			$(this).next(".faq__area-left-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("fal fa-plus").addClass("fal fa-minus")
		}
	});
	/*==========  Banner  ==========*/
	let sliderActive1 = '.banner-slide';
	let sliderInit1 = new Swiper(sliderActive1, {
		slidesPerView: 1,
		effect: 'fade',
		loop: true,
		spaceBetween: 0,
		effect: 'fade',
		autoplay: {
			delay: 6000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	function animated_swiper(selector, init) {
		let animated = function animated() {
			$(selector + ' [data-animation]').each(function() {
				let anim = $(this).data('animation');
				let delay = $(this).data('delay');
				let duration = $(this).data('duration');
				$(this).removeClass('anim' + anim).addClass(anim + ' animated').css({
					webkitAnimationDelay: delay,
					animationDelay: delay,
					webkitAnimationDuration: duration,
					animationDuration: duration
				}).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
					$(this).removeClass(anim + ' animated');
				});
			});
		};
		animated();
		init.on('slideChange', function() {
			$(sliderActive1 + ' [data-animation]').removeClass('animated');
		});
		init.on('slideChange', animated);
	};
	animated_swiper(sliderActive1, sliderInit1);
	/*==========  video-popup  ==========*/
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	/*==========  img-popup  ==========*/
	$('.img-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	/*==========  Team  ==========*/
	var swiper = new Swiper(".team__slider", {
		loop: true,
		speed: 1000,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			},
		},
	});
	/*==========  Testimonial Two  ==========*/
	var swiper = new Swiper(".testimonial__slider", {
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ".pagination",
			clickable: true,
		},
	});
	/*==========  Brand  ==========*/
	var swiper = new Swiper(".band__slider", {
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		autoplay: {
			delay: 3500,
		},
		breakpoints: {
			0: {
				slidesPerView: 3
			},
			575: {
				slidesPerView: 4
			},
			992: {
				slidesPerView: 6
			},
			1200: {
				slidesPerView: 8
			},
		}
	});
	/*==========  Cart Plus Minus  ==========*/
	$(".product__details-product-qty-select-cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if(oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});
	/*==========  theme loader  ==========*/
	$(window).on("load", function() {
		$(".theme-loader").fadeOut(500);
	});
	/*========== scroll to top  ==========*/
	var scrollPath = document.querySelector('.scroll-up path');
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
	scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updatescroll = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength / height);
		scrollPath.style.strokeDashoffset = scroll;
	}
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on('scroll', function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.scroll-up').addClass('active-scroll');
		} else {
			jQuery('.scroll-up').removeClass('active-scroll');
		}
	});
	jQuery('.scroll-up').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
})(jQuery);