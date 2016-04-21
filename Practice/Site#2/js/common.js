$(document).ready(function() {

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{

        0:{items:0},
        600:{items:0},
        1000:{items:3}

    }
});


	// Фикмированная шапка при скролле

$(".hided_menu").removeAttr("style").fadeIn('fast');
$(".hided_menu").attr({style: "display:none"});
		$(window).scroll(function(){
		if ($(this).scrollTop() > 20) {
			$(".hided_menu").addClass("default").fadeIn('fast');
			} else {
			$(".hided_menu").removeClass("default").fadeIn('fast');
			$(".hided_menu").attr({style: "display:none"});
			
		};
	});
			 
});

	