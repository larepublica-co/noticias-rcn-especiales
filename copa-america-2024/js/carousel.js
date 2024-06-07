$(".carousel__interna").owlCarousel({
  loop: true,
  margin: 15,
  navText: [
    "<span class='bi bi-chevron-left'></span>",
    "<span class='bi bi-chevron-right'></span>",
  ],
  dots: false,

  responsive: {
    320: {
      items: 1,
      nav: true,
    },
    1000: {
      items: 1,
      nav: true,
    },
  },
});
