//-- Variables Globales --------------------------------------------------------
var navHeight = $('.navbar').height();
var navbar = $('.navbar.navbar-default');
var body = $('body');
var buttonNavbarToggle = $('button.navbar-toggle');
var windowHeight = $(window).height();
var windowWidth = $(window).width();

//-- Funciones Globales --------------------------------------------------------

/* Checkear el ancho de la ventana para saber si es Mobile */
function checkWidth() {

  if ( windowWidth <= 414) {
    return true;
  }

  else {
    return false;
  }
}

/* Checkear si es Tablet */
function isTablet() {
  var calcAspectRatio = windowHeight / windowWidth;
  var aspectRatio = calcAspectRatio.toFixed(2);

  if ( windowHeight > windowWidth) {
    if ( aspectRatio == 1.33) {
      return true;
    }
    else {
      return false;
    }
  }
}

function calcularPadding(element) {
  var elementHeight = $(element).height();
  var elementMargin = (navHeight - elementHeight) / 2 + 'px';
  $(element).css({'padding-top': elementMargin, 'padding-bottom': elementMargin });
}


//-- Funciones para Elementos animados con Animate.css -------------------------
function fadeElement(element, animation) {
  $(element).css('opacity', 0);
  $(element).each(function() {
      $(this).waypoint(function() {
          $(this.element).addClass('animated').addClass(animation);
      },
      { offset: '80%'});
  });
}

function fadeElementOffset(element, animation, offsetvalue) {
  $(element).css('opacity', 0);
  $(element).each(function() {
      $(this).waypoint(function() {
          $(this.element).addClass('animated').addClass(animation);
      },
      { offset: offsetvalue
    });
  });
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
    autoplay:true,
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

//------
// Mover en Responsive
//------
$(document).on('resize', function () {

});
if ( checkWidth() ) {

  $("#section-features").append("");
  $("#formulario").appendTo("#form-container");
  $("#cotiza").prependTo('#section-features');

  // Remover el 2do col-sm-6
  $(".container-flotante .row div:nth-child(2)").remove();
  // Cambiar la class a col-sm-12
  $(".container-flotante .row div").attr('class', 'col-xs-12 col-sm-12')

  $(".item img").attr('src','http://placehold.it/320x300')

}

//-- Centrando el titulo slider -------------------------
var rowFormHeight = $('#formulario-contacto').parent().height();
if ( !checkWidth()) {
  $('.slider__title').parent().css({
    'height': rowFormHeight,
    'position': 'relative'
  });
}
