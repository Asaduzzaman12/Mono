$(document).ready(function($){
	"use strict";

	// Srticky header active
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if (scroll > 350) {
			$("#sticky-header").addClass("sticky");
		} else {
			$("#sticky-header").removeClass("sticky");
		}
	});


	// Mobile Menu active
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu-active',
		meanScreenWidth: "991"

	});

	// Slick Slider Active
	$('.slider-active').slick({
    	arrows: false,
    	speed: 800,
    	autoplay: true,
    	autoplaySpeed: 4000,
  	});

	// WOW Js Active
	new WOW().init();

	// Counter Active
	$('.counter').counterUp({
	    delay: 10,
	    time: 1000
	});

	// Testimonial Slider Active
	$('.testimonial-active').slick({
    	arrows: false,
    	speed: 800,
    	autoplay: true,
    	dots: true,
    	autoplaySpeed: 4000,
  	});


  	// Brand Slider Active
	$('.brand-active').slick({
    	arrows: false,
    	speed: 400,
    	autoplay: true,
    	dots: false,
    	slidesToShow: 5,
    	slidesToScroll: 1,
    	autoplaySpeed: 4000,
    	responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		      }
		    },
  		],
  		responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
  		]
  	});


  	// Scroll up btn active
  	$(window).scroll(function (){
  		if($(this).scrollTop() > 350){
  			$(".scroll-up-btn").fadeIn();
  		} else {
  			$(".scroll-up-btn").fadeOut();
  		}
  	});

  	$(".scroll-up-btn").click(function() {
  		$("html, body").animate({
  			scrollTop: 0
  		}, 700)
  	});




}(jQuery));