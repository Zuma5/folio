$(document).ready(function() {
    $('.details').on('click', '.pop_up', function() {
        $(this).closest("li").find('.zoom_img').fadeIn(400);
    });
    $('.zoom_img').on('click', function() {
        $(this).fadeOut(400);
    });
    
    $(".nav").on("click", "a", function(event) {
        event.preventDefault();

        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    if(window.matchMedia('(max-width: 701px)').matches) {
        $("nav").on("click", ".fa", function() {
            $(".nav").slideToggle("slow");
            $(".nav").css({display:"flex"});
        });
    };
});