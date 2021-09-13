$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


});


