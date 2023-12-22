const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // breakpoints (responsive silder)
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
    }
});