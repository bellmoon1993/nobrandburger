// 메인슬라이드
let sList = $(".container");
let liLength = $(".slide").length;
let num = 0;
let state = 1;

let prevSlider = function() {
    num--;
    if ( num == -1 ) {
      num = liLength-1;
      sList.prepend($(".slide:last", sList))
           .css({ marginLeft: "-100%" })
           .animate({ marginLeft: 0 }, function() {
             for( let i=0; i<liLength-1; i++ ) {
              sList.prepend($(".slide:last", sList))
             }
             sList.css({ marginLeft: `-${(liLength-1)*100}%` })
             state = 1;
           })
    }
    else {
      sList.not(":animated").animate({ marginLeft: "+=100%" }, function() {
        state = 1;
      })
    }
    $(".slideBtn a").removeClass('active');
    $(".slideBtn a:eq("+ num +")").addClass('active')
  }

let nextSlider = function() {
    num++;
    if ( num == liLength ) {
      num = 0;
      sList.append($(".slide:first", sList))
           .css({ marginLeft: `-${(liLength-2)*100}%` })
           .animate({ marginLeft: `-${(liLength-1)*100}%` }, function() {
             for( let i=0; i<liLength-1  ; i++ ) {
              sList.append($(".slide:first", sList))
             }
             sList.css({ marginLeft: 0 })
             state = 1;
           })
    }
    else {
      sList.not(":animated").animate({ marginLeft: "-=100%" }, function() {
        state = 1;
      })
    }
    $(".slideBtn a").removeClass('active');
    $(".slideBtn a:eq("+ num +")").addClass('active')
  }
  let timer = setInterval(_.throttle(function(){
    nextSlider();
  }, 5000), 5000)

  $(".slidePrev").on('click', function(e) {
    if ( state == 1 ) {
      state = 0;
      prevSlider();
    }
  })
  $(".slideNext").on('click', function(e) {
    if ( state == 1 ) {
      state = 0;
      nextSlider();
    }
  })
  $(".slideBtn a").on('click', function(e) {
    $(".slideBtn a").removeClass('active');
    $(this).addClass('active')
    num = $(this).index();
    sList.animate({ marginLeft: `${num*(-100)}%` }), 1000
  })

  $(".slideBtn2 a, .slideBtn a").on('click', function(e) {
    e.preventDefault();
    clearInterval(timer)
    timer = setInterval(nextSlider, 5000)

  })
  $(".pause").on('click', function(e){
    e.preventDefault();
    clearInterval(timer)
  })
  $(".play").on('click', function(e){
    e.preventDefault();
    clearInterval(timer)
    timer = setInterval(nextSlider, 5000)

  })

// 메뉴 탭

$(".food").not($(".food:first")).css({ top: -500 });
$(".foodWrap h3 a:first").addClass('active');
$(".foodWrap h3").on('click', function(e){
  e.preventDefault();
  $(".foodWrap h3 a").removeClass('active');
  $(this).children('a').addClass('active');
  $(".food").css({ top: -500 });
  $(this).next().css({ top: 0 })
})



// 메뉴 슬라이드


$('.slick').slick({
  dots: false, //페이지 네비게이션
  arrows:true, // next, prev 이동 버튼
  // autoplay:ture // 자동 넘김 여부
  infinite: false, //반복설정
  // speed: 300, //슬라이드 속도
  // autoplaySpeed : 10000,   // 자동 넘김시 슬라이드 시간
  pauseOnHover : true,// 마우스 hover시 슬라이드 멈춤
  vertical : false,  // 세로 방향 슬라이드 옵션
  prevArrow :  `#prev1`,
  nextArrow : `#next1`, //화살표 커스텀
  slidesToShow: 4, //보여질 슬라이드 수
  slidesToScroll: 4, //넘겨질 슬라이드 수
  responsive: [ // -> 반응형 옵션
    {
      breakpoint: 1249, // 반응형 ~ 1024
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 960,// 반응형 ~ 960
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 599,// 반응형 ~ 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots : false
      }
    }
  ]
});

$('.slick2').slick({
  dots: false, //페이지 네비게이션
  arrows:true, // next, prev 이동 버튼
  // autoplay:ture // 자동 넘김 여부
  infinite: false, //반복설정
  // speed: 300, //슬라이드 속도
  // autoplaySpeed : 10000,   // 자동 넘김시 슬라이드 시간
  pauseOnHover : true,// 마우스 hover시 슬라이드 멈춤
  // vertical : false,  // 세로 방향 슬라이드 옵션
  prevArrow :  `#prev2`,
  nextArrow : `#next2`, //화살표 커스텀
  slidesToShow: 2, //보여질 슬라이드 수
  slidesToScroll: 2, //넘겨질 슬라이드 수
  responsive: [ // -> 반응형 옵션

    {
      breakpoint: 599,// 반응형 ~ 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.slick3').slick({
  dots: false, //페이지 네비게이션
  arrows:true, // next, prev 이동 버튼
  // autoplay:ture // 자동 넘김 여부
  infinite: false, //반복설정
  // speed: 300, //슬라이드 속도
  // autoplaySpeed : 10000,   // 자동 넘김시 슬라이드 시간
  pauseOnHover : true,// 마우스 hover시 슬라이드 멈춤
  vertical : false,  // 세로 방향 슬라이드 옵션
  prevArrow :  `#prev3`,
  nextArrow : `#next3`, //화살표 커스텀
  slidesToShow: 2, //보여질 슬라이드 수
  slidesToScroll: 2,
  responsive: [ // -> 반응형 옵션

    {
      breakpoint: 599,// 반응형 ~ 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.slick4').slick({
  dots: false, //페이지 네비게이션
  arrows:true, // next, prev 이동 버튼
  // autoplay:ture // 자동 넘김 여부
  infinite: false, //반복설정
  // speed: 300, //슬라이드 속도
  // autoplaySpeed : 10000,   // 자동 넘김시 슬라이드 시간
  pauseOnHover : true,// 마우스 hover시 슬라이드 멈춤
  vertical : false,  // 세로 방향 슬라이드 옵션
  prevArrow :  `#prev4`,
  nextArrow : `#next4`, //화살표 커스텀
  slidesToShow: 3, //보여질 슬라이드 수
  slidesToScroll: 3, //넘겨질 슬라이드 수
  responsive: [ // -> 반응형 옵션
    {
      breakpoint: 960,// 반응형 ~ 960
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 599,// 반응형 ~ 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

// 노브랜드버거 TV



let resizing = ()=> {
  $(".tvWrap ul").prepend($(".tvWrap ul li:last"))
  $(".tvWrap ul li").not($(".tvWrap ul li:eq(1)")).css({opacity : 0.5})

  $(".tvnext").on('click',function(e){
     e.preventDefault();
      $('.tvWrap ul:not(:animated)').animate({ marginLeft : `-=990` }, 500, function(){
          $(this).append($('>li:first',this)).css({ marginLeft : 0 },500 )
      })
      $('.tvWrap ul li:eq(1)').animate({ opacity : 0.5 },500)
      $(".tvWrap ul li:eq(2)").animate({ opacity : 1 },500)
  })
  $(".tvprev").on('click',function(e){
    e.preventDefault();
    $(".tvWrap ul:not(:animated)").prepend($(".tvWrap ul li:last")).css({ marginLeft: -990 })
    $(".tvWrap ul li:eq(1)").css({ opacity: 0.5 })
    $(".tvWrap ul li:eq(2)").css({ opacity: 1 })
    $(".tvWrap ul:not(:animated)").animate({ marginLeft: `+=990`})
    $(".tvWrap ul li:eq(1)").animate({ opacity: 1 })
    $(".tvWrap ul li:eq(2)").animate({ opacity: 0.5 })
  })

  $(".tvnext2").on('click',function(e){
     e.preventDefault();
      $('.tvWrap ul:not(:animated)').animate({ marginLeft : `-=710` }, 500, function(){
          $(this).append($('>li:first',this)).css({ marginLeft : 0 },500 )
      })
      $('.tvWrap ul li:eq(1)').animate({ opacity : 0.5 },500)
      $(".tvWrap ul li:eq(2)").animate({ opacity : 1 },500)
  })
  $(".tvprev2").on('click',function(e){
    e.preventDefault();
    $(".tvWrap ul:not(:animated)").prepend($(".tvWrap ul li:last")).css({ marginLeft: -710 })
    $(".tvWrap ul li:eq(1)").css({ opacity: 0.5 })
    $(".tvWrap ul li:eq(2)").css({ opacity: 1 })
    $(".tvWrap ul:not(:animated)").animate({ marginLeft: `+=710`})
    $(".tvWrap ul li:eq(1)").animate({ opacity: 1 })
    $(".tvWrap ul li:eq(2)").animate({ opacity: 0.5 })
  })

//   $(".tvnext3").on('click',function(e){
//     e.preventDefault();
//      $('.tvWrap ul:not(:animated)').animate({ marginLeft : `-=70vw` }, 500, function(){
//          $(this).append($('>li:first',this)).css({ marginLeft : 0 },500 )
//      })
//      $('.tvWrap ul li:eq(1)').animate({ opacity : 0.5 },500)
//      $(".tvWrap ul li:eq(2)").animate({ opacity : 1 },500)
//  })
//  $(".tvprev3").on('click',function(e){
//    e.preventDefault();
//    $(".tvWrap ul:not(:animated)").prepend($(".tvWrap ul li:last")).css({ marginLeft: -710 })
//    $(".tvWrap ul li:eq(1)").css({ opacity: 0.5 })
//    $(".tvWrap ul li:eq(2)").css({ opacity: 1 })
//    $(".tvWrap ul:not(:animated)").animate({ marginLeft: `+=70vw`})
//    $(".tvWrap ul li:eq(1)").animate({ opacity: 1 })
//    $(".tvWrap ul li:eq(2)").animate({ opacity: 0.5 })
//  })
}



resizing();
$('.slick5').slick({
  dots: true, //페이지 네비게이션
  arrows:true, // next, prev 이동 버튼
  // autoplay:ture // 자동 넘김 여부
  infinite: true, //반복설정
  // speed: 300, //슬라이드 속도
  // autoplaySpeed : 10000,   // 자동 넘김시 슬라이드 시간
  pauseOnHover : false,// 마우스 hover시 슬라이드 멈춤
  vertical : false,  // 세로 방향 슬라이드 옵션
  prevArrow :  `.tvprev3`,
  nextArrow : `.tvnext3`, //화살표 커스텀
  slidesToShow: 3, //보여질 슬라이드 수
  slidesToScroll: 3, //넘겨질 슬라이드 수
  responsive: [ // -> 반응형 옵션
    
    {
      breakpoint: 599,// 반응형 ~ 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots : true
      }
    }
  ]
});