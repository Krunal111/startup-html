AOS.init({
	duration: 1000,
  disable: 'mobile',
  //once: true
});

// Mobile Menu JS
jQuery(".hamburger").on('click', function() {
  jQuery(this).toggleClass('active');
  jQuery(".header__menu").slideToggle();
});

// Testimonial Slider JS Start
var swiper = new Swiper(".testimonial__slider", {
  slidesPerView: 4,
  spaceBetween: 60,
  centeredSlides: false,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    575: {
      slidesPerView: 2.2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3.3,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 3.2,
      spaceBetween: 60
    }
  }
});
// Testimonial Slider JS End

// Heder Fixed JS Start
$(window).scroll(function(){
  if ($(this).scrollTop() > 60) {
     $('.header__main').addClass('fixed');
  } else {
     $('.header__main').removeClass('fixed');
  }
});
// Heder Fixed JS End

// SVG file to SVG code convert JS Start
function img2svg() {
  jQuery('.in__svg').each(function (i, e) {
    var $img = jQuery(e);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });
}
img2svg();
// SVG file to SVG code convert JS End

// Dark mode js
jQuery(document).on('click', '.mode__btn', function () {
	if (jQuery(this).hasClass('light')) {
		jQuery(this).removeClass('light').addClass('dark');
		jQuery('body').addClass('dark__mode');
	} else if (jQuery(this).hasClass('dark')) {
		jQuery(this).removeClass('dark').addClass('light');
		jQuery('body').removeClass('dark__mode');
	}
});
// Dark mode js