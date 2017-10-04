$(document).ready(function() {
	var touchs = $('#touch-menu');
    var menus = $('.header_contacts');
    $(touchs).on('click', function(e) {
        e.preventDefault();
        menus.slideToggle();

    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menus.is(':hidden')) {
            menus.removeAttr('style');
        }
    });
// Фикмированная шапка при скролле
			$("#header").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					$("#header").addClass("default").fadeIn('fast');
				} else {
					$("#header").removeClass("default").fadeIn('fast');
				};
			});
// tabs
			$(".tab_item").not(":first").hide();
			$(".tabs .tab").click(function() {
			$(".tabs .tab").removeClass("active_tabs").eq($(this).index()).addClass("active_tabs");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
			}).eq(0).addClass("active_tabs");

});
// js
