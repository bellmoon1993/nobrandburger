$("#menuTabBtn a:eq(0)").addClass('active');
$(".box").css({ display : 'none'})
$(".num1").css({ display : 'block'})
$("#menuTabBtn a").on('click',function(e){
    n = $(this).data('num');
    e.preventDefault();
    $("#menuTabBtn a").removeClass('active');
    $(this).addClass('active');
    $(".box").css({ display : 'none'})
    $(`.num`+n).css({ display : 'block' })
})

$(function(){
    var $duration = 100
    var $menuImage = $('#menuImg ul li');

    $menuImage.mouseover(function(){
        $(this).find('dl').stop().animate({opacity : 1, top: '0%'},$duration,function(){
            $(this).find('dt').animate({opacity : 1, top : '20%' },200);
            $(this).find('dd').animate({opacity : 1, top : '50%' },200);
        });
    }).mouseout(function(){
        $(this).find('dl').stop().animate({opacity : 0, top: '100%'},$duration,function(){
            $(this).find('dt').animate({opacity : 0, top : '100%' },200);
            $(this).find('dd').animate({opacity : 0, top : '100%' },200);
        });
    })
})