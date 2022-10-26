let state = 1;
$(window).on('scroll', function() {
  let winPos = $(window).scrollTop();
  $("section").each(function() {
    if (winPos >= $(this).position().top-600) {
      $(this).children('.sloganWrap').stop().animate({ opacity: 1 },800)
    }
    else if (winPos <= $(this).position().top-$(window).height() ) {
      $(this).children('.sloganWrap').css({ opacity: 0 })
    }
  })
})