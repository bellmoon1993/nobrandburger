//네비게이션 작동

// 웹 네비
$('#news').children('.snb').hide();
$('#news').on('mouseenter',function(){
  $(this).children('.snb').stop().slideDown(200)
})
$('#news,.snb').on('mouseleave',function(){
  $(this).children('.snb').stop().slideUp(200)
})

// 모바일 네비

   $('#mob_nav').hide();
   $('#hamburgerBar').on('click',function(){
    $('#mob_nav').slideDown(300)
  })
  $('#cancelBar').on('click',function(){
    $('#mob_nav').slideUp(300)
  })


// top 클릭시 문서 제일 상단으로
$(".top").on('click', function() {
  $("html, body").animate({ scrollTop: 0 })
})

// footer 관련사이트 링크
$('.linkWrap').hide();
$('#related_link').on('mouseenter',function(){
  $(this).children('ul').stop().slideDown(200)
})
$('#related_link, ul').on('mouseleave',function(){
  $(this).children('ul').stop().slideUp(300)
})
