$(function(){


    var display = 0;
    // Defalut buttton
    // display = 0;
    // 1 time Clicked buttton
    // display = 1;
    // 2 time Clicked buttton
    // display = 2;

    $( "#chat_icon" ).click(function() {
        // $(".chat_sub1").animate({right: '80px', bottom: '10px'});
        // $(".chat_sub2").animate({right: '60px', bottom: '60px'});
        // $(".chat_sub3").animate({right: '10px', bottom: '80px'});
        if (display === 0){
          $(".chat_sub1").removeClass('hide_me');
          $(".chat_sub2").removeClass('hide_me');
          $(".chat_sub3").removeClass('hide_me');
          $(".chat_sub1").addClass('animate_sub1');
          $(".chat_sub2").addClass('animate_sub2');
          $(".chat_sub3").addClass('animate_sub3');
          $('.chat_img').addClass('animate_chat_image_before');
          $('.half_circle').addClass('animate_half_circle');

          if ($('.half_circle').hasClass('animate_half_circle')) {
              display = 1;
          }
        }else if(display === 1){
          $(".chat_sub1").removeClass('hide_me');
          $(".chat_sub2").removeClass('hide_me');
          $(".chat_sub3").removeClass('hide_me');
          $(".chat_sub1").removeClass('animate_sub1');
          $(".chat_sub2").removeClass('animate_sub2');
          $(".chat_sub3").removeClass('animate_sub3');
          $('.chat_img').removeClass('animate_chat_image_before');
          $('.half_circle').removeClass('animate_half_circle');

          // $('.chat_box').toggleClass('animation_chat_box');
          if (! $('.half_circle').hasClass('animate_half_circle')) {
              display = 0;
          }
        }else{
          $(".chat_sub1").removeClass('hide_me');
          $(".chat_sub2").removeClass('hide_me');
          $(".chat_sub3").removeClass('hide_me');
          $(".modal").removeClass('animate_modal');
          $('.chat_box').removeClass('animation_chat_box');
          $(".chat_form").removeClass('animation_chat_form');
          if (! $('.chat_box').hasClass('animation_chat_box')) {
            display = 1;
          }
        }

      });

      $( ".chat_sub1" ).click(function() {
        $(".chat_sub1").addClass('hide_me');
        $(".chat_sub2").addClass('hide_me');
        $(".chat_sub3").addClass('hide_me');
        $(".modal").addClass('animate_modal');
        $('.chat_box').addClass('animation_chat_box');
        $(".chat_form").addClass('animation_chat_form');
        if ($('.chat_box').hasClass('animation_chat_box')) {
          display = 2;
        }
      });

      $( ".chat_sub2" ).click(function() {
        $(".chat_sub1").addClass('hide_me');
        $(".chat_sub2").addClass('hide_me');
        $(".chat_sub3").addClass('hide_me');
        $(".modal").addClass('animate_modal');
        $('.chat_box').addClass('animation_chat_box');
        $(".chat_form").addClass('animation_chat_form');
        if ($('.chat_box').hasClass('animation_chat_box')) {
          display = 2;
        }
      });

      $( ".chat_sub3" ).click(function() {
        $(".chat_sub1").addClass('hide_me');
        $(".chat_sub2").addClass('hide_me');
        $(".chat_sub3").addClass('hide_me');
        $(".modal").addClass('animate_modal');
        $('.chat_box').addClass('animation_chat_box');
        $(".chat_form").addClass('animation_chat_form');
        if ($('.chat_box').hasClass('animation_chat_box')) {
          display = 2;
        }
      });

      $( "#desktop_chat" ).click(function() {
        $(".desktop_chat_sub1").toggleClass('animate_desktop_sub1');
        $(".desktop_chat_sub2").toggleClass('animate_desktop_sub2');
        $(".desktop_chat_sub3").toggleClass('animate_desktop_sub3');
        $('.desktop_chat_img').toggleClass('animate_desktop_chat_image_before');
      });


});