var navButton = document.getElementById("nav_toggle");
var left_menu = document.getElementById("left_menu");
var ham = document.getElementsByClassName("ham");

function toggle_nav(event) {
    var i;
    for (i = 0; i < ham.length; i++) {
        ham[i].classList.toggle("cross");
    }
    // left_menu.classList.toggle("came_in");
}

// navButton.addEventListener("click", toggle_nav);

// left_menu.addEventListener("click", toggle_nav);


$(function(){

    function animate_width(){
        $(".booking-logo").addClass("animate_width");
    }

    function animate_rotation(){
        $(".booking-logo").addClass("animate_rotation");
    }

    function animate_border(){
        $(".booking-logo").addClass("animate_border");
    }



    // document.getElementById("mp4_src").src = "assets/video/hotel.mp4";
    // document.getElementById("f-video").load();

    $(window).bind("load", function() {
        setTimeout(animate_rotation, 1000 );
        setTimeout(animate_width, 2000 );
        setTimeout(animate_border, 3500 );
    });
});