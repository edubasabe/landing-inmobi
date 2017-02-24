//------
// Funciones
//------

function isMobile() {
  if ( $(window).width() <= 1190 ) {
    return true;
    // console.log('Es Mobile');
  }
}

//------
// jQuery to collapse the navbar on scroll
//------

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//------
// Owl Carousel
//------

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    // autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
//---
// Navbar
//---
function navHeight() {
  var alto = $("nav.navbar").height();
  // console.log(alto);
  return alto;
}

var altoNav = navHeight();

//-- Padding Links
$(window).on('resize load', function() {
  var aheight = $('a.page-scroll').height();
  var ulPad = (altoNav - aheight) / 2;
  // console.log(ulPad);
  $('ul.nav.navbar-nav').css({
    'padding-top': ulPad,
    'padding-bottom': ulPad
  })

  //-- Separacion del main
  $('main.main').css({
    'margin-top': altoNav,
  });


});


//------
// Mover en Responsive
//------

if ( isMobile() ) {

  $("#section-features").prepend("<section id='section-contacto'><div class='container' id='cotiza'><div class='row'><div class='col-xs-12' id='form-container'></div></div></div></section>");
  $("#formulario").appendTo("#form-container");
  $("#cotiza").prependTo('#section-contacto');

  // Remover el 2do col-sm-6
  $(".container-flotante .row div:nth-child(2)").remove();
  // Cambiar la class a col-sm-12
  $(".container-flotante .row div").attr('class', 'col-xs-12 col-sm-12')

    //-- Slider Responsive
    $(".owl-item:nth-child(3) img").attr('src','./images/ictinos-slider-edificio-tablet.jpg');
    $(".owl-item:nth-child(4) img").attr('src','./images/ictinos-slider-living-tablet.jpg');
    $(".owl-item:nth-child(5) img").attr('src','./images/ictinos-slider-comedor-tablet.jpg');
    $(".owl-item:nth-child(6) img").attr('src','./images/ictinos-slider-cocina-tablet.jpg');

}
