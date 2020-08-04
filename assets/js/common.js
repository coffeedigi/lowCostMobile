$(document).ready(function () {

	$('.navDotsWrapp a[href*="#"]').bind('click', function (e) {
		e.preventDefault();
		var target = $(this).attr("href"); $('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 600,
			function () {
				location.hash = target;
			});
		return false;
	});

	$(window).scroll(function () {
		var scrollDistance = $(window).scrollTop();
		$('.Sec-wrap-Link').each(function (i) {
			if ($(this).position().top <= scrollDistance) {
				$('.navDotsWrapp a.active').removeClass('active');
				$('.navDotsWrapp a').eq(i).addClass('active');
			}
		});
	}).scroll();

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 30) {
			$("body").addClass("header-scrolled");
		} else {
			$("body").removeClass("header-scrolled");
		}
	});

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 500) {
			$("body").addClass("header-cta-visible");
		} else {
			$("body").removeClass("header-cta-visible");
		}
	});

	$('.navbar-collapse').on('shown.bs.collapse', function () {
		$('body').addClass('show-overlay');
	})

	$('.navbar-collapse').on('hidden.bs.collapse', function () {
		$('body').removeClass('show-overlay');
	})

	$('.scrollClick[href*="#"]').bind('click', function (e) {
		e.preventDefault();
		var target = $(this).attr("href"); $('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 600, function () {
			location.hash = target;
		});
		return false;
	});

	$('.drawerModal').on("shown.bs.modal", function () { $("body").addClass("drawerShow"); });
	$('.drawerModal').on("hide.bs.modal", function () { $("body").removeClass("drawerShow"); });




	// document.querySelectorAll('.buttonCompress').forEach(button => button.addEventListener('click', e => {
	// 	if(!button.classList.contains('compress')) {
	// 		button.classList.add('compress');
	// 		setTimeout(() => button.classList.remove('compress'), 4000);
	// 	}
	// 	e.preventDefault();
	// }));

	// Start basic jQuery

	$(".header-burger").click(function () {
		if (!$("body").hasClass("header-scrolled")) {
			var navToggle = $("#navToggle").hasClass("show");
			if (navToggle) {
				$("body").removeClass("header-scrolled");
			} else {
				$("body").addClass("header-scrolled");
			}
		} else {
			var navToggle = $("#navToggle").hasClass("show");
			if (navToggle) {
				$("body").removeClass("header-scrolled");
			} else {
				$("body").addClass("header-scrolled");
			}
		}
	});

	// Increae and decrease
	// $(".increase-count").unbind("click");
	// $(".increase-count").click(function () {
	// 	var increase = $(this).closest(".counter-wrap").find("input").val();
	// 	if (increase == '') {
	// 		increase = 0;
	// 	}
	// 	$(this).closest(".counter-wrap").find("input").val(parseInt(increase) + parseInt(1));
	// 	$(this).closest(".counter-wrap").find("div.incident-count").text(parseInt(increase) + parseInt(1));

	// 	if (increase >= 1) {
	// 		$(".decrease-count").removeAttr("disabled");
	// 		$(".decrease-count").removeClass("disabled");
	// 	}
	// });

	// $(".decrease-count").unbind("click");
	// $(".decrease-count").click(function () {
	// 	var decrease = $(this).closest(".counter-wrap").find("input").val();
	// 	if (decrease <= 0) {
	// 		$(this).attr("disabled", true);
	// 		$(".decrease-count").toggleClass("disabled");
	// 	} else {
	// 		$(this).closest(".counter-wrap").find("input").val(parseInt(decrease) - parseInt(1));
	// 		$(this).closest(".counter-wrap").find("div.incident-count").text(parseInt(decrease) - parseInt(1));
	// 	}
	// });

	// For question counter and disabled all feilds

	// question-counter
	$(".question-content").each(function (index, element) {
		var inputPara = $(element).find("input");
		var inputType = $(inputPara).attr("type");
		var parameterValue = true;
		if (inputPara.length == 0) {
			var inputParaDummy = $(element).find("select");
			if (inputParaDummy.length > 0) {
				inputType = "select";
			}
		}
		if (inputType == "text") {
			$("input[type='" + inputType + "']").each(function (i, k) {
				if ($(k).val() == "") {
					parameterValue = false;
				}
			});
		}
		if (inputType == "radio") {
			parameterValue = $(element).find("input[type='" + inputType + "']").is(":checked");
		}
		if (inputType == "select") {
			var parameterValueSel = $(element).find(inputType + " option:selected").val();
			if (parameterValueSel == "" || parameterValueSel == undefined || parameterValueSel == null) {
				parameterValue = false;
			}
		}
		if (inputType == "checkbox") {
			parameterValue = $(element).find("input[type='" + inputType + "']").prop("checked");
		}
		if (!parameterValue) {
			$(element).closest(".section-page-question").find(".question-counter").removeClass("complete");
			// $(element).closest(".section-page-question").next().find('.question-wrap').addClass('disabled');

			// $(element).closest(".section-page-question").next().find('input').attr('disabled', true);
			// $(element).closest(".section-page-question").next().find('select').attr('disabled', true);

			// $(element).closest(".section-page-question").last().find('button').attr('disabled', true);
			// $(element).closest(".section-page-question").next().find('select').attr('disabled', true);
			// if ($(element).closest(".section-page-questions-response").prev().find('.question-wrap').hasClass("disabled")) {
			// 	// $(element).closest(".section-page-question").find('.question-wrap').addClass('disabled');
			// }
		} else {
			// $(element).closest(".section-page-question").next().find('input').removeAttr('disabled');
			// $(element).closest(".section-page-question").next().find('select').removeAttr('disabled');
			$(element).closest(".section-page-question").find(".question-counter").addClass("complete");
		}
	});

	function scrollTopDiv(obj) {
		if (obj.length > 0) {
			var attr = '';
			var scroll = false;
			$(obj).each(function (i, k) {
				attr = $(k).attr("type");
			});
			if (attr == undefined) {
				attr = "select";
			}
			if (attr == "text") {
				var totInput = $(obj).closest(".question-content").find("input[type='text']");
				$(totInput).each(function (index, element) {
					if ($(element).val() == "") {
						scroll = true;
					}
				});
				var isSelectBox = $(obj).closest(".question-content").find("select");
				if(isSelectBox.length>0){
					scroll = true;
				}
				var isValid = $(obj).closest(".question-content").find(".customValid");
				if(isValid.length>0){
					scroll = true;
				}
			}

			if (attr == "select") {
				var totInput = $(obj).closest(".question-content").find("select");
				var inputName = $(obj).closest(".question-content").find("select").attr("formcontrolname");
				$(totInput).each(function (index, element) {
					if ($("select [formcontrolname=" + inputName + "] option:selected").val() == "") {
						scroll = true;
					}
				});
			}

			if (attr == "checkbox") {
				scroll = $(obj).find("input[type='" + attr + "']").prop(":checked");
				var inputMult = $(obj).closest(".question-content").find("input").attr("formcontrolname");
				if(inputMult == "discount_apply"){
					scroll = true;
					$(obj).closest(".section-page-question").find(".question-counter").addClass("complete");
				}
			}
			if (attr == "radio") {
				scroll = $(obj).find("input[type='" + attr + "']").is(":checked");
				var closest = $(obj).closest(".section-page-question").find(".question-wrap");
				if(closest.length>1){
					$(obj).closest(".section-page-question").find(".question-counter").addClass("complete");
					return false;
				}
			}
			if (!scroll) {
				var nextEl = $(obj).closest(".section-page-question");
				nextEl = nextEl.next();
				// $(obj).closest(".section-page-question").next().find(".question-wrap").removeClass("disabled");
				// $(obj).closest(".section-page-question").next().find("select").removeAttr("disabled");
				// $(obj).closest(".section-page-question").next().find("input").removeAttr("disabled");
				$(obj).closest(".section-page-question").find(".question-counter").addClass("complete");
				if (nextEl.length > 0) {
					setTimeout(function () {
						$(".scroll-wrap").animate({ scrollTop: nextEl[0].offsetTop });
					}, 1000);
				} else {
					nextEl = $(obj).closest(".section-page-questions-response").next();
					if ($(nextEl).length > 0) {
						var firstEl = $(nextEl).find(".section-page-question").first();
						// $(firstEl[0]).find(".question-wrap").removeClass("disabled");
						// $(firstEl[0]).find("select").removeAttr("disabled");
						// $(firstEl[0]).find("input").removeAttr("disabled");
						setTimeout(function () {
							$(".scroll-wrap").animate({ scrollTop: nextEl[0].offsetTop });
						}, 1000);
					}
				}
			} else {
				// $(obj).closest(".section-page-question").nextAll().find(".question-wrap").addClass("disabled");
				$(obj).closest(".section-page-question").find(".question-counter").removeClass("complete");
				nextEl = $(obj).closest(".section-page-questions-response").nextAll();
				if (nextEl.length > 0) {
					nextEl.each(function (j, k) {
						// $(k).find(".question-wrap").addClass("disabled");
						// $(k).find("select").attr("disabled", true);
						// $(k).find("input").attr("disabled", true);
						$(k).find(".question-counter").removeClass("complete");
					});
				}
			}
		}
	}

	$("input[type=radio]").click(function () {
		scrollTopDiv($(this));
	});

	$("select").change(function () {
		scrollTopDiv($(this));
	});

	$("input[type=text]").blur(function () {
		scrollTopDiv($(this));
	});
	$("input[type=checkbox]").click(function () {
		scrollTopDiv($(this));
	});
	$("input[name='insurance_line']").click(function () {
		var insurenceType = $(this).val();
		$(".retrieve-quotes").show();
		if (insurenceType == "home") {
			$(".retrieve-quotes").hide();
		}
	});

	$(".item").click(function () {
		var selectedItem = $(this).text();
		$(this).closest(".dropdown-select-wrap").find("input").val(selectedItem);
		scrollTopDiv($(this).closest(".dropdown-select-wrap").find("input"));
	});
	//Button Compress Animation
	// document.querySelectorAll('.buttonCompress').forEach(button => button.addEventListener('click', e => {
	//     if(!button.classList.contains('compress')) {
	//         button.classList.add('compress');
	//         // setTimeout(() => button.classList.remove('compress'), , 4000);
	//         setTimeout(function(){ 
	//         	button.classList.remove('compress');
	//         	$('#form').submit();
	//     	}, 4000);
	//     }else{
	//     	setTimeout(function(){ 
	//         	return true;
	//     	}, 4000);
	//     }
	// }));

	if($(".firstEle").length>0){
		if($(".secondEle").length>0){
			$(".secondEle").each(function(i,k){
				$(k).insertAfter(".firstEle");
			});
			$(".question-content").each(function(j,h){
				if($(h).children().length == 0){
					$(h).closest(".section-page-question").remove();
				}
			});
		}
	}


	//Menu Line Animated
	var nav = $('.navLine_Wrap');
	var line = $('<div />').addClass('line');

	line.appendTo(nav);

	var active = nav.find('.active');
	var pos = 0;
	var wid = 0;

	if (active.length) {
		pos = active.position().left;
		wid = active.width();
		line.css({
			left: pos,
			width: wid
		});
	}

	nav.find('.header-nav>.nav-item>.nav-link').click(function (e) {
		e.preventDefault();
		if (!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {

			nav.addClass('animate');

			var _this = $(this);

			nav.find('.header-nav>.nav-item').removeClass('active');

			var position = _this.parent().position();
			var width = _this.parent().width();

			if (position.left >= pos) {
				line.animate({
					width: ((position.left - pos) + width)
				}, 300, function () {
					line.animate({
						width: width,
						left: position.left
					}, 150, function () {
						nav.removeClass('animate');
					});
					_this.parent().addClass('active');
				});
			} else {
				line.animate({
					left: position.left,
					width: ((pos - position.left) + wid)
				}, 300, function () {
					line.animate({
						width: width
					}, 150, function () {
						nav.removeClass('animate');
					});
					_this.parent().addClass('active');
				});
			}

			pos = position.left;
			wid = width;
		}
	});
	//End Menu Line Animated
});

// (function ($) {
// 	$(document).ready(function () {
// 		// Mobile Screen Verticle Slider
// 		if ($(".slideVertical_plan").length > 0) {
// 			$(".slideVertical_plan").slick({
// 				arrows: false,
// 				dots: false,
// 				infinite: true,
// 				slidesToShow: 4,
// 				slidesToScroll: 1,
// 				autoplay: true,
// 				speed: 500,
// 				autoplaySpeed: 1000,
// 				centerMode: true,
// 				centerPadding: '75px',
// 				useTransform: true,
// 				cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
// 				vertical: true,
// 				verticalSwiping: false,
// 				swipe: false,
// 				pauseOnHover: false,
// 				responsive: [
// 					{
// 						breakpoint: 576,
// 						settings: {
// 							centerPadding: '65px',
// 						}
// 					},
// 				]
// 			});
// 		}
// 	});
// }(jQuery));
// End Mobile Screen Verticle Slider



(function ($) {
	$(document).ready(function () {
		if ($(".sideDotsMng").length > 0) {
			$(".sideDotsMng").scrollToFixed({
				minWidth: 0,
				marginTop: 0,
				offsets: true,
				removeOffsets: true,
				limit: function () {
					var a = $(".leadDotNav").offset().top - $(".sideDotsMng").outerHeight() - 10;
				}
			});
		}
	});
}(jQuery));

(function ($) {
	$(document).ready(function () {
		// if ($('[data-toggle="tooltip"]').length > 0) {
		// 	$('[data-toggle="tooltip"]').tooltip({});
		// }
	});
}(jQuery));

(function ($) {
	$(document).ready(function () {

		if ($('.ffl-wrapper').length > 0) {
			$('.ffl-wrapper').floatingFormLabels();
		}
	});
}(jQuery));
// Floating Fiels
// $('.ffl-wrapper').floatingFormLabels();


// $(".decrease-count:not(.disabled)").on("click", function(e) {
// 	var $button = $(this);
// 	var oldValue = $button.parent().find("input").val();
// 	if(oldValue > 0){
// 		var newVal = parseFloat(oldValue) - 1;
// 	}
// 	// if(newVal < 20 ){
// 	// 	$button.parent().find(".increase-count").removeClass("disabled");
// 	// }else{
// 	// 	$button.parent().find(".increase-count").addClass("disabled");
// 	// }

// 	if(newVal == 0 ){
// 		$button.parent().find(".decrease-count").addClass("disabled");
// 		e. stopPropagation() 
// 	}

// 	$button.parent().find("input").val(newVal);
// 	$button.parent().find("incident-count").text()=newVal;
//   });


//   $(".increase-count:not(.disabled)").on("click", function(e) {
// 	var $button = $(this);
// 	var oldValue = $button.parent().find("input").val();
// 	if(oldValue < 20){
// 		var newVal = parseFloat(oldValue) + 1;
// 		// $button.parent().find("decrease-count").removeClass("disabled");
// 	}

// 	// if(newVal > 0){
// 	// 	$button.parent().find(".decrease-count").removeClass("disabled");
// 	// }else{
// 	// 	$button.parent().find(".decrease-count").addClass("disabled");
// 	// }

// 	if(newVal > 19 ){
// 		$button.parent().find(".increase-count").addClass("disabled");
// 		e. stopPropagation() 
// 	}

// 	$button.parent().find("input").val(newVal);
// 	$button.parent().find("incident-count").text()=newVal;
//   });

