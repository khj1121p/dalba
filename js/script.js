$(document).ready(function(){
  media();

  function media(){
    const ww = $(window).width();
    if(ww >= 960){
      AOS.init();
    }else{

    }
  }
  // AOS.init();

  // 서브 메뉴
  $('.menus-box .menus').mouseenter(function(){
    let result = $(this).attr('data-alt');
    $('.sub-menu').removeClass('active');
    $(`#${result}`).addClass('active');

    $('.sub-menu-box').addClass('active');
  });

  $('.sub-menu-box').mouseleave(function(){
    $(this).removeClass('active');
  });

  // menu-area-box
  $('.menu-btn').click(function(){
    $(this).toggleClass('on');
    $('.menu-area-box').toggleClass('on');
    $('.header-area').toggleClass('on');
    $('.icon-box').toggleClass('on');
    $('.category').toggleClass('on');
  });

  // 배너 스와이퍼
    var swiper = new Swiper(".BSwiper", {
      effect: "fade",
      loop: "true",
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
    });

    // 프로덕트 스와이퍼
        var swiper = new Swiper(".PSwiper", {
        loop: true,
        speed: 500,
        autoplay: {
          dela: 500,
          disableOnInteraction: false,
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        breakpoints: {
          1400: {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 1,    
          },
          760: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 1,    
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1,    
          },
          375:{
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,    
          }
        }
      });
   
});
