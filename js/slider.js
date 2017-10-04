$(document).ready(function() {
$('.slider_personage').slick({
  arrows:true,
  dots:false,
   nextArrow: '<div class="fa right_style_sider" aria-hidden="true"></div>',
   prevArrow: '<div class="fa left_style_sider" aria-hidden="true"></div>',
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});


});