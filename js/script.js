const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1180: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
