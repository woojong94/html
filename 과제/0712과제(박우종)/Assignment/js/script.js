window.onload = function() {
      var swiper = new Swiper(".hot_item .mySwiper", {
        slidesPerView: 4,
        spaceBetween: 5,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}