$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,

    //centerMode: true,
    //centerPadding: '40px',
    
  //  Arrows: true,
    //appendArrows: '.circles',
    variableWidth: true,
    //prevArrow: '.circle',
   // appendArrows: $('.circle'),
   // prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i>2</button>',
  //  nextArrow: '<button id="next" type="button" class="btn btn-juliet">1<i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    responsive: [
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
          slidesToScroll: 1,
          //centerMode: true,
          variableWidth: false
        }
      }
    ]
  });