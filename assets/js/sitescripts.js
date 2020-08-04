// Homepage Dots Section Scroll
$(document).ready(function() {
	$(".sideDotsMng").scrollToFixed({
        minWidth: 0,
        marginTop: 0,
		offsets: true,
        removeOffsets: true,
        limit: function () {
            var a = $(".leadDotNav").offset().top - $(".sideDotsMng").outerHeight() - 10;
            return a;
        }
    });
//
$('.navDotsWrapp a[href*="#"]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior
				var target = $(this).attr("href"); // Set the target as variable
				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});
				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		$('.Sec-wrap-Link').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navDotsWrapp a.active').removeClass('active');
						$('.navDotsWrapp a').eq(i).addClass('active');
				}
		});
}).scroll();
// End Homepage
//Header Scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
        $("body").addClass("header-scrolled");
    } else {
        $("body").removeClass("header-scrolled");
    }
});
//header cta visible
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $("body").addClass("header-cta-visible");
    } else {
        $("body").removeClass("header-cta-visible");
    }
});
//Apply Class on body toggle navbar
$('.navbar-collapse').on('shown.bs.collapse', function () {
  $('body').addClass('show-overlay');
})
$('.navbar-collapse').on('hidden.bs.collapse', function () {
  $('body').removeClass('show-overlay');
})
// Scroll on click
$(document).ready(function() {
		$('.scrollClick[href*="#"]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior
				var target = $(this).attr("href"); // Set the target as variable
				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});
				return false;
		});
});
// Tooltip
$(function () {
        // $('[data-toggle="tooltip"]').tooltip({
        // });
});
// Drawer
$('.drawerModal').on("shown.bs.modal", function() {$("body").addClass("drawerShow");});
$('.drawerModal').on("hide.bs.modal", function() {$("body").removeClass("drawerShow");});

//Button Compress Animation
document.querySelectorAll('.buttonCompress').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('compress')) {

        button.classList.add('compress');

        setTimeout(() => button.classList.remove('compress'), 4000);

    }
    e.preventDefault();
}));