$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    appendDots: $('.testimonial-card__content'),
    slidesToShow: 3,
    slidesToScroll: 3,
   // variableWidth: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });