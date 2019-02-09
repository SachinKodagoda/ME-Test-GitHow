$(function(){

    $( "#chat_icon" ).click(function() {
        // $(".chat_sub1").animate({right: '80px', bottom: '10px'});
        // $(".chat_sub2").animate({right: '60px', bottom: '60px'});
        // $(".chat_sub3").animate({right: '10px', bottom: '80px'});
        $(".chat_sub1").toggleClass('animate_sub1');
        $(".chat_sub2").toggleClass('animate_sub2');
        $(".chat_sub3").toggleClass('animate_sub3');
        $("#chat_icon").toggleClass('animate_chat');
        $('.chat_img').toggleClass('animate_chat_image_before');
        $('.half_circle').toggleClass('animate_half_circle');
        
      });
});