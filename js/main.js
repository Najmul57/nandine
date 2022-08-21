(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

// active
$(document).ready(function(){
	$('ul li a').click(function(){
	  $('li a').removeClass("active");
	  $(this).addClass("active");
  });
  });

// one page active
$('a[href^="#"]').click(function(event) {
	var id = $(this).attr("href");
	var target = $(id).offset().top;
	$('html, body').animate({scrollTop:target}, 500);
	event.preventDefault();
});

function getTargetTop(elem){
var id = elem.attr("href");
var offset = 60;
return $(id).offset().top - offset;
}


$(window).scroll(function(e){
	isSelected($(window).scrollTop())
});

var sections = $('a[href^="#"]');

function isSelected(scrolledTo){

var threshold = 50;
var i;

for (i = 0; i < sections.length; i++) {
	var section = $(sections[i]);
	var target = getTargetTop(section);
   
	if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
		sections.removeClass("active");
		section.addClass("active");
	}

};
}



// owlCarousel
$('.testimonial-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:false,
	smartSpeed:1000,
	dots:true,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})

// skill
$('.skillbar').skillBars({

	// number start
	from: 0,       
  
	// number end 
	to: false,      
  
	// animation speed
	speed: 1000,   
  
	// how often the element should be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d
	interval: 100,    
  
	// the number of decimal places to show
	decimals: 0,      
  
	// callback method for every time the element is updated,
	onUpdate: null,   
  
	// callback method for when the element finishes updating
	onComplete: null,   
  
	// CSS classes
	classes:{
	  skillBarBar : '.skillbar-bar',
	  skillBarPercent : '.skill-bar-percent',
	}
	
  });


// mixitup
var mixer = mixitup('.portfolio-content');


/* magnificPopup img view */
$('.portfolio-popup').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.video-popup').magnificPopup({
	type: 'iframe'
});

// counterUp
$('.counter').counterUp({
    delay: 10,
    time: 1000
});



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


// WOW active
new WOW().init();


})(jQuery);