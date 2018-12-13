var $texto = $('.contenedor-texto p')
var $second = $('.segundo-contenedor')
var $primer = $('.primer-contenedor')
var scroll = 0;

$(window).bind('mousewheel DOMMouseScroll', function(event){
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      console.log("up")
      scroll -= 1
      console.log(scroll)
      $('.image').fadeOut();
      $('.image').removeClass('slideInDown animated slow')
      $('.image').addClass('slideOutUp animated slow')
      $texto.fadeOut();
      $texto.removeClass('slideInDown animated slow')
      $texto.addClass('slideOutUp animated slow')
      if (scroll <= 10){
        $primer.removeClass('slideOutDown animated slow')
        $primer.addClass('slideInUp animated slow')
        $second.removeClass('slideInUp animated slow');
        $second.addClass('slideOutDown animated slow');
      }
  }
  else {
      console.log("down")
      scroll += 1
      console.log(scroll)
      $texto.fadeIn();
      $texto.removeClass('slideOutUp animated slow')
      $texto.addClass('slideInDown animated slow')
      $('.image').fadeIn();
      $('.image').removeClass('slideOutUp animated slow')
      $('.image').addClass('slideInDown animated slow')
      if (scroll >= 10){
        $primer.removeClass('slideInUp animated slow')
        $primer.addClass('slideOutDown animated slow')
        $primer.fadeOut(1000);
        $second.show();
        $second.removeClass('slideOutDown animated slow')
        $second.addClass('slideInUp animated slow')
      }
  }
});

