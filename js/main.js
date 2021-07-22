// ----------------------------------------------AOS------------------------------------------------
// $(window).on("scroll", function () {
//   AOS.init({
//     // Global settings:
//     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//     startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//     initClassName: 'aos-init', // class applied after initialization
//     animatedClassName: 'aos-animate', // class applied on animation
//     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
//     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//     offset: 220, // offset (in px) from the original trigger point
//     delay: 0, // values from 0 to 3000, with step 50ms
//     duration: 400, // values from 0 to 3000, with step 50ms
//     easing: 'ease', // default easing for AOS animations
//     once: false, // whether animation should happen only once - while scrolling down
//     mirror: false, // whether elements should animate out while scrolling past them
//     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
//   });
// });

$(function() {

  // ----------------------------------------------smooth-nav------------------------------------------------
  $('.logo__link, .menu__item-link, .footer__menu-item-link').on('click', function(e) {
    e.preventDefault()
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 700);
    // $('.menu__list').removeClass('menu__list--active');
    // $('.menu__btn-line').removeClass('menu__btn-line--active');
  });   

});

const swiper = new Swiper('.slider', {

  // simulateTouch: true, //draggable (by default for PC)
  // touchRatio: 1, //amount of draggable slides, by default, 0 - will switch-off
  // touchAngle: 45, //working angle for swipe
  // grabCursor: true,
  // slideToClickedSlide: true,
  // autoHeight: true, // підлаштовує висоту слайдера під висоту поточного слайду
  // slidesPerView: 1, // може бути не ціле число чи auto (if for .swiper-slide { width: auto; })
  // spaceBetween: 20, //space berween slides
  // slidesPerGroup: 3, //кількість слайдів, щопролистуються
  // centeredSlides: true, // active slide - at center
  // watchOverflow: true, //відключає фкнкціонал (слайдер), якщо слайдів менше, ніж треба
  // initialSlide: 1, //стартовий слайд (0 - це перший)
  // loop: true, //infinity, скрол і мультирядність не працюють
  // loopedSlides: 3, //use when slidesPerView:auto,
  // freeMode: true, //дозволяє свайпити слайди без фіксованих позицій, а не по слайду / слайдах, зручно при scrollbar
  // speed: 800, //швидкість переключення слайдів
  // direction: 'vertical', //1. при scrollbar - маємо кастомний скрол; 2. для коректної роботи - встановити висоту слайдера
  // effrct: 'fade',// 1. by default 'slide'; 2. додатково можна використовувати fadeEffect: {}
  // fadeEffect: {
  //   crossFade: true, //паралельна зміна прозорості
  // }
  // effrct: 'flip',
  // flipEffect: {
  //   slideShadows: true,
  //   limitRotation: true, //виводить тільки активний слайд
  // }
  // effrct: 'cube', //обмежити в стилях ширину слайдера
  // cubeEffect: {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // }
  // effrct: 'coverFlow', //обмежити в стилях ширину слайдера
  // coverFlowEffect: {
  //   rotate: 20,
  //   stretch: 50,
  //   slideShadows: true,
  // }

  // slidesPerColumn: 2, //мультирядність, працює при autoHeight: false, slidesPerView: 2,swiper-container і swiper-slide мають мати встановлену висоту (для swiper-slide можна вирахувати: swiper-slide { height: calc((100% - spaceBetweenpx) / 2); } ), overflow: hidden; ?
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
   clicable: true,
   dynamicBullets: true,
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },
  // hashNavigation: { //hashNavigation
  //   watchState: true, //with browser arrows
  // },
  // keyboard: { //керування з клавіатури
  //   enabled: true,
  //   onlyInViewport: true, //by default
  //   pageUpDown: true,
  // },
  // mousewheel: { //керування з миші
  //   sensivity: 1,
  //   eventsTarget: '.swiper-container', //якщо слайдерів багато, цей параметр залишити за замовчуванням (не писати цей рядок??)
  // },
  // autoplay: {
  //   delay: 3000, //by defoult
  //   stopOnLastSlide: true, //with loop: false,
  //   disableOnInteraction: true, // відключає після свайпа вручну
  // },

  breakpoints: { //adaptive, mobileFirst, don't works for direction; 1. screen width, 2. співвідношення висота / щирина
    320: { // '@.75' - height / width
      slidesPerView: 1,
    },
    320: { // '@1.5' - height / width
      slidesPerView: 2,
    },

  },

  //-------lazyLoad-Start------------
  // preloadImages: false,
  // lazy: {
  //   loadOnTransitionStart: false,
  //   loadPrevNext: false,
  // },
  // watchSlidesProgress: true,// вулючати, коли slidesPerView = auto або >1
  // watchSlidesVisibility: true, // вулючати, коли slidesPerView = auto або >1; додає клас видимим слайдам
  //-------lazyLoad-End------------
  // zoom: { //works on doubleСдшсл
  //   maxRatio: 5,
  //   minRatio: 1,
  // },

  // thumbs: {
  //   swiper: {
  //     el: '.mini-slider', //aditional class for container .swiper-container for thumbs
  //     slidesPreView: 5,
  //   }
  // },

  //----для слайдера в слайдері---Start
  // nested: true,
  // slideToClickedSlide: false, //for parentSlider?
  //----для слайдера в слайдері---End

  //об'єднання слайдерів-----Start
  // let swiper1 = new Swiper('.swiper1', {
    
  // });
  // let swiper2 = new Swiper('.swiper2', {
    
  // });
  // swiper1.controller.control = swiper2;
  // swiper2.controller.control = swiper1;
  //об'єднання слайдерів-----End
  
  //при зміні статуса слайдера - при tabs....Start
  // observer: true, //оновлює слайдер при зміні елементів слайдера
  // observerParents: true, //оновлює слайдер при зміні батьківських елементів слайдера
  // observerSlidechildren: true, //оновлює слайдер при зміні дочірніх елементів слайдера
  //при зміні статуса слайдера - при tabs....End

  
  //Запуск автопрокрутки при наведенні миші-----Start
  // let swiperXXX = new Swiper('.swiper2', { } );
  // let sliderBlock = document.querySelector('.slider');
  
  // sliderBlock.addEventListener("mouseenter", function(e) {
  //   swiperXXX.params.autoplay.disableOnInteraction = false;
  //   swiperXXX.params.autoplay.delay = 500;
  //   swiperXXX.params.autoplay.start();
  // });
  // sliderBlock.addEventListener("mouseleave", function(e) {
  //   myImageSlider.params.autoplay.stop();
  });
  //Запуск автопрокрутки при наведенні миші-----End