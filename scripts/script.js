$(document).ready(function(){
	wscroll = $(window).scrollTop();
	
	if (wscroll > 0) {
		$("#navcont").addClass("fixed");
	}

    //FADE IN THE CONTENTS OF HEADER SECTION
	$("#header .element").animate({'opacity': '1'},700);
	$("#navcont .element").animate({'opacity': '1'},700);

	if ($("#navcont").css('display') === "block" && $("#navcontmobile").css('display') === "none"){
			if (wscroll > 20){
				$("#navcont").addClass('scroll');
			}
			if (wscroll < 20){
				$("#navcont").removeClass('scroll');
			}
		}
		else {
			$("#navcont").removeClass('scroll');
		}


	$(window).scroll(function (){ 
		wscroll = $(window).scrollTop();

		if ($("#navcont").css('display') === "block" && $("#navcontmobile").css('display') === "none"){
			if (wscroll > 20){
				$("#navcont").addClass('scroll');
			}
			if (wscroll < 20){
				$("#navcont").removeClass('scroll');
			}
		}
		else {
			$("#navcont").removeClass('scroll');
		}

		//FADE IN EACH OF THE CONTENTS WHEN THE WINDOW REACHED THE SETION
		$(".sectport").each(function (){
			bottom_of_window = wscroll + $(window).height();
			elementtoshow = $(this).find(".element");

			//IF THE ID IS NOT THE HEADER, DO THIS
				if ($(this).attr("id") !== "header") {
					if ($(this).attr("id") === "skills") {
						bottom_of_sect = $(this).offset().top + ($(this).outerHeight()/2);
						if (bottom_of_window > bottom_of_sect) {
							$(elementtoshow).animate({'opacity': '1'},700);

							var innerskillbox = $(this).find(".skilllist li div div");
							$(innerskillbox).each(function (){
								$(this).addClass('ani');
							})
						}
					}
					else if ($(this).attr("id") === "work") {
						bottom_of_sect = $(this).offset().top + ($(this).outerHeight()/6);
						if (bottom_of_window > (bottom_of_sect)) {
							$(elementtoshow).animate({'opacity': '1'},700);
						}
					}
					else {
							bottom_of_sect = $(this).offset().top + ($(this).outerHeight()/2);
						if (bottom_of_window > bottom_of_sect) {
							$(elementtoshow).animate({'opacity': '1'},700);
						}
					}
				}

			
		})

	}) 

	//NAV SMOOTH SCROLLING
	$("ul.clearfix li a").click(function (){
		return false;
		var idval = $(this).attr("href");
		if ($("#navcont").css('display') === "block" && $("#navcontmobile").css('display') === "none"){
			$("html, body").animate({
				scrollTop:  ($(idval).offset().top)-60
			},700);
		}
		else {
			$("html, body").animate({
				scrollTop:  ($(idval).offset().top)
			},700);
		}
	})
	$("#navcont .cont .logo a").click(function (){
		var idval = $(this).attr("href");
		if ($("#navcont").css('display') === "block" && $("#navcontmobile").css('display') === "none"){
			$("html, body").animate({
				scrollTop:  ($(idval).offset().top)-60
			},700);
		}
		else {
			$("html, body").animate({
				scrollTop:  ($(idval).offset().top)
			},700);
		}
	})

	//MENU MOBILE
	$("#navcontmobile").click(function(){
		$(this).toggleClass("clicked");
		$("#navcont").toggleClass('mobilev');
		$("#navcont").slideToggle("fast");
	});

	//CAROUSEL ABOUT ME 
	var isAnimating = false;
	$('.carleft').click(function (){
		if(isAnimating) return false;
		isAnimating = true;
		// IF IT'S ON THE FIRST SLIDE
		if($(".carcont:first-child").hasClass("view")){
			$('.inntercarcont').css('margin-left', '-300%');
			//REMOVE THE CLASS ON THE CURRENT SLIDE
			$(".carcont.view").removeClass("view");
			//ADD THE CLASS ON THE PREV SLIDE
			$(".carcont:nth-child(3)").addClass("view");
		}
		else {
			curr = $(".carcont.view").index();
			prev  = curr-1
			prevslide = $(".carcont").eq(prev);
			$(".carcont.view").removeClass("view");
			$(prevslide).addClass("view");
		}
		$('.inntercarcont').animate({
			'margin-left': '+=100%'
		}, 300, function(){
			isAnimating = false;
		})

		//FOR CAROUSEL NAVIGATION
		curr = $(".carcont.view").index();

		$(".carnav .caro.on").removeClass("on");
		$(".carnav .caro").eq(curr).addClass("on");

	})
	$('.carright').click(function (){
		if(isAnimating) return false;
		isAnimating = true;

		$('.inntercarcont').animate({
			'margin-left': '-=100%'
		}, 300, function(){
			// IF IT'S ON THE LAST SLIDE
			if($(".carcont:nth-child(3)").hasClass("view")){
				$('.inntercarcont').css('margin-left', '0');
				//REMOVE THE CLASS ON THE CURRENT SLIDE
				$(".carcont.view").removeClass("view");
				//ADD THE CLASS ON THE NEXT SLIDE
				$(".carcont:first-child").addClass("view");
			}
			else {
				curr = $(".carcont.view").index();
				next  = curr+1
				nextslide = $(".carcont").eq(next);
				$(".carcont.view").removeClass("view");
				$(nextslide).addClass("view");
			}
			isAnimating = false;
		});

		//FOR CAROUSEL NAVIGATION
		curr = $(".carcont.view").index();
		next  = curr+1
		if(next === 3){
			$(".carnav .caro.on").removeClass("on");
			$(".carnav .caro:first-child").addClass("on");
		}
		else{
			$(".carnav .caro.on").removeClass("on");
			$(".carnav .caro").eq(next).addClass("on");
		}
	})
});