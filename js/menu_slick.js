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
      breakpoint: 660,// 반응형 ~ 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
  vertical : false,  // 세로 방향 슬라이드 옵션
  prevArrow :  `#prev2`,        
  nextArrow : `#next2`, //화살표 커스텀
  slidesToShow: 2, //보여질 슬라이드 수
  slidesToScroll: 0, //넘겨질 슬라이드 수
  responsive: [ // -> 반응형 옵션
    { 
      breakpoint: 1200, // 반응형 ~ 3000
      settings: {
        slidesToShow: 2,
        slidesToScroll: 0,
        infinite: true,
        dots: false
      }
    },
    { 
      breakpoint: 960,// 반응형 ~ 960
      settings: {
        slidesToShow: 2,
        slidesToScroll: 0
      }
    },
    { 
      breakpoint: 660,// 반응형 ~ 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
  slidesToScroll: 0, //넘겨질 슬라이드 수
  responsive: [ // -> 반응형 옵션
    { 
      breakpoint: 1200, // 반응형 ~ 1024
      settings: {
        slidesToShow: 2,
        slidesToScroll: 0,
        infinite: true,
        dots: false
      }
    },
    { 
      breakpoint: 960,// 반응형 ~ 960
      settings: {
        slidesToShow: 2,
        slidesToScroll: 0
      }
    },
    { 
      breakpoint: 800,// 반응형 ~ 800
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
  slidesToScroll: 0, //넘겨질 슬라이드 수
  responsive: [ // -> 반응형 옵션
    { 
      breakpoint: 1200, // 반응형 ~ 1024
      settings: {
        slidesToShow: 3,
        slidesToScroll: 0,
        infinite: true,
        dots: false
      }
    },
    { 
      breakpoint: 960,// 반응형 ~ 960
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    { 
      breakpoint: 660,// 반응형 ~ 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// $(".food").not($(".food:first")).hide();


// $("#one").on('click', function(e){
//   e.preventDefault();
//   $(".food").hide();
//   $(".food:eq(0)").show();
// })

// $("#two").on('click', function(e){
//   e.preventDefault();
//   $(".food").hide();
//   $(".food:eq(1)").show();
// })

// $("#three").on('click', function(e){
//   e.preventDefault();
  
//   $(".food").hide();
//   $(".food:eq(2)").show();
// })

// $("#four").on('click', function(e){
//   e.preventDefault();
//   $(".food").hide();
//   $(".food:eq(3)").show();
// })