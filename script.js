$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrolly > 20){
         $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      if(this.scroll > 500){
        $('.scroll-up-btn').addClass("show");
      }else{
        $('.scroll-up-btn').removeClass("show");

      }
    });
    gsap.to(".navbar",{
      backgroundColor: "#000",
      height:"110px",
      duration:"0.5",
      scrollTrigger:{
          trigger:".navbar",
          scroller:"body",
          // markers: true,
          start:"top -10%",
          end: "top -11%",
          scrub:1
      }
    })

    // slide-up script
    $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");

    });
  //  typing animated script
    var typed = new Typed(".typing", {
      strings: ["Developer" ,"Freelancer","Designer","Editor" ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true

    
   });

   var typed = new Typed(".typing-2", {
    strings: ["Developer" ,"Freelancer","Designer","Editor" ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

  
 });



    // owl carousel script
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
          nav: false
        },
        600:{
        items: 2,
        nav: false
        },
        1000:{
          items: 3,
          nav: false
          }

      }

    });
});