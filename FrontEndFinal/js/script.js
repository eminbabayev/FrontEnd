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
});
    