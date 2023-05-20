$(function(){

    $('.pricing-main-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        infinite: true,
        // speed: 500,
        // fade: false,
        // cssEase: 'linear',
        centerMode: true,
        centerPadding: "0px",
        });

    $('.review-main-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        // prevArrow: '.prev',
        // nextArrow: '.next',
        infinite: true,
        // speed: 500,
        // fade: false,
        // cssEase: 'linear',
        centerMode: true,
        centerPadding: "0px",
        });

});