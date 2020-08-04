$(document).ready(function(){
	$('.navDotsWrapp a[href*="#"]').bind('click', function(e) {
		e.preventDefault(); 
		var target = $(this).attr("href");$('html, body').stop().animate({
			scrollTop: $(target).offset().top}, 600, 
			function() {location.hash = target;
			});
		return false;
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

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 30) {
			$("body").addClass("header-scrolled");
		} else {
			$("body").removeClass("header-scrolled");
		}
	});

	$(window).scroll(function() {    
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

	$('.scrollClick[href*="#"]').bind('click', function(e) {
		e.preventDefault();
		var target = $(this).attr("href");$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 600, function() {
			location.hash = target; 
		});
		return false;
	});

	$('.drawerModal').on("shown.bs.modal", function() {$("body").addClass("drawerShow");});
	$('.drawerModal').on("hide.bs.modal", function() {$("body").removeClass("drawerShow");});

	


	// document.querySelectorAll('.buttonCompress').forEach(button => button.addEventListener('click', e => {
	// 	if(!button.classList.contains('compress')) {
	// 		button.classList.add('compress');
	// 		setTimeout(() => button.classList.remove('compress'), 4000);
	// 	}
	// 	e.preventDefault();
	// }));

	// Start basic jQuery

	$(".header-burger").click(function(){
		if(!$("body").hasClass("header-scrolled")){
			var navToggle = $("#navToggle").hasClass("show");
			if(navToggle){
				$("body").removeClass("header-scrolled");
			}else{
				$("body").addClass("header-scrolled");
			}
		}else{
			var navToggle = $("#navToggle").hasClass("show");
			if(navToggle){
				$("body").removeClass("header-scrolled");
			}else{
				$("body").addClass("header-scrolled");
			}
		}
	});

	// Increae and decrease
	$(".increase-count").unbind("click");
	$(".increase-count").click(function(){
		var increase = $(this).closest(".counter-wrap").find("input").val();
		if(increase==''){
			increase = 0;
		}
		$(this).closest(".counter-wrap").find("input").val(parseInt(increase) + parseInt(1));
		$(this).closest(".counter-wrap").find("div.incident-count").text(parseInt(increase) + parseInt(1));

		if(increase>=1){
			$(".decrease-count").removeAttr("disabled");
			$(".decrease-count").removeClass("disabled");
		}
	});

	$(".decrease-count").unbind("click");
	$(".decrease-count").click(function(){
		var decrease = $(this).closest(".counter-wrap").find("input").val();
		if(decrease<=0){
			$(this).attr("disabled",true);
			$(".decrease-count").toggleClass("disabled");
		}else{
			$(this).closest(".counter-wrap").find("input").val(parseInt(decrease) - parseInt(1));
			$(this).closest(".counter-wrap").find("div.incident-count").text(parseInt(decrease) - parseInt(1));
		}
		
	});

	// For question counter and disabled all feilds
	// question-counter
	$(".question-content").each(function(index,element){
		var inputPara = $(element).find("input");
		var inputType = $(inputPara).attr("type");
		var parameterValue = false;
		if(inputPara.length == 0){
			var inputParaDummy = $(element).find("select");
			if(inputParaDummy.length>0){
				inputType = "select";
			}
		}
		if(inputType == "text"){
			$("input[type='"+inputType+"']").each(function(i,k){
				if($(k).val() != ""){
					parameterValue = true;
				}else{
					parameterValue = false;
				}
			});
		}
		if(inputType == "radio"){
			parameterValue = $(element).find("input[type='"+inputType+"']").is(":checked");
		}
		if(inputType == "select"){
			var parameterValueSel = $(element).find(inputType+" option:selected").val();
			if(parameterValueSel!=""){
				parameterValue = true;
			}else{
				parameterValue = false;
			}
		}
		// alert("inputType=>"+inputType+"parameterValue=>"+parameterValue);
		if(inputType == "checkbox"){
			parameterValue = $(element).find("input[type='"+inputType+"']").prop("checked");
		}
		// alert(parameterValue);
		if(!parameterValue){
			$(element).closest(".section-page-question").find(".question-counter").removeClass("complete");
			$(element).closest(".section-page-question").next().find('.question-wrap').addClass('disabled');
			$(element).closest(".section-page-question").last().find('button').attr('disabled', true);
			$(element).closest(".section-page-question").next().find('select').attr('disabled', true);
			
			if($(element).closest(".section-page-questions-response").prev().find('.question-wrap').hasClass("disabled")){
				$(element).closest(".section-page-question").find('.question-wrap').addClass('disabled');
			}
		}


		// if(index != 0){
		// 	// For disabled logic
		// 	$(element).find('input[type="text"]').each(function(i,k){
		// 		if($(k).val() == ""){
		// 			$(element).find('input').attr('disabled', true);
		// 			$(element).closest(".section-page-question").find('.question-wrap').toggleClass('disabled');
		// 			$(element).find('button').attr('disabled', true);
		// 			$(element).find('select').attr('disabled', true);
		// 		}
		// 	});


		// 	$(element).find('select').each(function(i,k){
		// 		if($(k).val() == ""){
		// 			$(element).closest(".section-page-question").find('.question-wrap').toggleClass('disabled');
		// 			$(element).find('input').attr('disabled', true);
		// 			$(element).find('button').attr('disabled', true);
		// 			$(element).find('select').attr('disabled', true);
		// 		}
		// 	});
		// 	var checkMng = false;
		// 	$(element).find('input[type="radio"]').each(function(i,k){
		// 		if($(k).is(":checked")){
		// 			checkMng = true;
		// 		}
		// 	});
		// 	if(!checkMng){
		// 		$(element).closest(".section-page-question").find('.question-wrap').toggleClass('disabled');
		// 		$(element).find('input').attr('disabled', true);
		// 		$(element).find('button').attr('disabled', true);
		// 		$(element).find('select').attr('disabled', true);
		// 	}

		// 	var boxMng = false;
		// 	$(element).find('input[type="checkbox"]').each(function(i,k){
		// 		if($(k).prop("checked") == true){
		// 			boxMng = true;
		// 		}
		// 	});
		// 	if(!boxMng){
		// 		$(element).closest(".section-page-question").find('.question-wrap').toggleClass('disabled');
		// 		$(element).find('input').attr('disabled', true);
		// 		$(element).find('button').attr('disabled', true);
		// 		$(element).find('select').attr('disabled', true);
		// 		// $(element).closest(".question-wrap").find(".question-counter").toggleClass("complete");
		// 	}
		// }

		// // For check box
		// var checkMng = false;
		// $(element).find('input[type="radio"]').each(function(i,k){
		// 	if($(k).is(":checked")){
		// 		checkMng = true;
		// 	}
		// });

		// if(checkMng){
		// 	$(element).closest(".question-wrap").find(".question-counter").toggleClass("complete");
		// }


		// // Select box
		// var selectMng = false;
		// $(element).find('select').each(function(i,k){
		// 	if($(k).is(":checked")){
		// 		selectMng = true;
		// 	}
		// });

		// if(selectMng){
		// 	$(element).closest(".question-wrap").find(".question-counter").toggleClass("complete");
		// }


		// // Input type text
		// var inputMng = false;
		// $(element).find('input[type="text"]').each(function(i,k){
		// 	if($(k).val() != ""){
		// 		inputMng = true;
		// 	}
		// });
		// if(inputMng){
		// 	$(element).closest(".question-wrap").find(".question-counter").toggleClass("complete");
		// }

		// // Check box
		// var checkboxMng = false;
		// $(element).find('input[type="checkbox"]').each(function(i,k){
		// 	if($(k).prop('checked') == true){
		// 		checkboxMng = true;
		// 	}
		// });
		// if(checkboxMng){
		// 	$(element).closest(".question-wrap").find(".question-counter").toggleClass("complete");
		// }
	});
	function scrollTopDiv(obj){
		$(obj).closest(".section-page-question").find('.question-wrap').removeClass('disabled');
		$(obj).closest(".question-wrap").next(".question-wrap").find("input").removeClass("disabled");
		$(obj).closest(".question-wrap").next(".question-wrap").find("select").removeAttr("disabled");
		// For car insurence
		$(obj).closest(".section-page-question").next(".section-page-question").find("input").removeAttr("disabled");
		$(obj).closest(".section-page-question").next(".section-page-question").find("select").removeAttr("disabled");

		var next = $(obj).closest(".question-wrap").next(".question-wrap");
		if($(obj).closest(".section-page-question").length){
			next = $(obj).closest(".section-page-question").next(".section-page-question");
		}

		if(next.length == 0){
			$(".question-content").find("button").removeAttr("disabled");
			var t = $(obj).closest(".section-page-question").last();
			if(t.length>0){
				setTimeout(function(){ $(".scroll-wrap").animate({ scrollTop: t[0].offsetTop+400}); }, 1000);
			}
		}else{
			if(next.length>0){
				setTimeout(function(){ $(".scroll-wrap").animate({ scrollTop: next[0].offsetTop}); }, 1000);
			}
		}
	}


	$(".form-check-input").click(function(){
		scrollTopDiv($(this));
	});

	$("input[type=text]").blur(function(){
		$(this).closest(".question-wrap").find(".question-counter").removeClass("complete");
		if(!$(this).closest(".dropdown-select-wrap").hasClass("md-Label-wrap")){
			var totInput = $(this).closest(".question-wrap").find("[type=text]");
			if(totInput.length > 1){
				var flag = 0;
				$(totInput).each(function(k,j){
					if($(j).val()==""){
						flag = 1;
					}
				});
				if(flag!=1){
					$(this).closest(".question-wrap").find(".question-counter").toggleClass("complete");
					scrollTopDiv($(this));
				}
			}else{
				if($(this).val() != ""){
					$(this).closest(".question-wrap").find(".question-counter").toggleClass("complete");
					scrollTopDiv($(this));
				}
			}
		}
	});

	$(".item").click(function(){
		$(this).closest(".question-wrap").find(".question-counter").removeClass("complete");
		var item = $(this).text();
		if(item!=''){
			$(this).closest(".question-wrap").find(".question-counter").toggleClass("complete");
			$(this).closest(".dropdown").find("input[type='text']").val(item);
			scrollTopDiv($(this));
		}
	});


	$("select").change(function(){
		scrollTopDiv($(this));
	});


	$("input[type='radio']").click(function(){
		var current = false;
		var currentDiv = false;
		$(this).closest(".question-wrap").find(".question-counter").removeClass("complete");
		$(this).closest(".question-content").find("input[type='radio']").each(function(i,k){
			if($(k).is(":checked")){
				if($(k).attr("formcontrolname") == "violations"){
					$(".increase-count").removeAttr("disabled");
					currentDiv = true;
				}
				current = true;
			}
		});

		if(current){
			$(this).closest(".question-wrap").find(".question-counter").toggleClass("complete");
			if(currentDiv){
				var t = $(this).closest(".question-wrap").next();
				setTimeout(function(){ $(".scroll-wrap").animate({ scrollTop: t[0].offsetTop}); }, 1000);
			}else{
				scrollTopDiv($(this));	
			}
		}
	});

	$("input[type='checkbox']").click(function(){
		var current = false;
		$(this).closest(".question-wrap").find(".question-counter").removeClass("complete");
		$(this).closest(".question-content").find("input[type='checkbox']").each(function(i,k){
			if($(k).prop("checked")){
				current = true;
			}
		});
		if(current){
			$(this).closest(".question-wrap").find(".question-counter").toggleClass("complete");
			scrollTopDiv($(this));	
		}
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

});



(function($) {
	$(document).ready(function() {
		$(".sideDotsMng").scrollToFixed({
			minWidth: 0,
			marginTop: 0,
			offsets: true,
			removeOffsets: true,
			limit: function () {
				var a = $(".leadDotNav").offset().top - $(".sideDotsMng").outerHeight() - 10;
			}
		});
	});
} (jQuery));

// (function($) {
	$(document).ready(function() {
		// $('[data-toggle="tooltip"]').tooltip({
		// });
	});
// } (jQuery));


function myFunction() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}