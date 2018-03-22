$(document).ready(function(){

    $(window).scroll(function(){
      console.log($(this).scrollTop())
    })
  
    $(".search-icon").click(function(){
      $(".form-container").toggle();
    }) 
    // if($(window).scrollTop()>0){ 
    //   $("nav").css({
    //     "top":"0",
    //     "transition":"all 0s"});}
    
    navbg();
    $(window).resize(function(){
      navbg();
    })
     function navbg(e){
      if($(window).width()>1140){
        $("nav").css("margin-top","30px").removeClass("bg-dark");      
        $(window).scroll(function(){
          // console.log(e)  
          if($(window).scrollTop()>0){
            $("nav").css("margin-top","0").addClass("bg-dark");
          }
          else{
            $("nav").css("margin-top","30px").removeClass("bg-dark");
          }
        })
      }
      else{
        $("nav").css("margin-top","0").addClass("bg-dark");
        
      }
    }
    
   
    $(".mydropdown-toggle").mouseover(function(){
      $("nav").css("overflo")
    });
    // $(".input-text").click(function(){
    //     $(this).css("border", "2px solid red ");
    // });
    $('.timer').countTo();

    $(".card-button").click(function(){
      $(this).css("color", "#23527c");

    });
    
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin: 10,
      nav:true,
      smartSpeed:950,
      autoplay:true,
      
      
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })
});
    