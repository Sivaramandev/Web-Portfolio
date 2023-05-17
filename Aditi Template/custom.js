$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

// 
$(Document).ready(function(){
    $("icon_wrapper").click(function(){
        $(".navlinks_wrapper").toggle();
    })
})


#navbar{
    position:static;
    width: 100%;
    top: 0;
    z-index: 2;
}