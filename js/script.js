// slider 
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
// slider 

// typed
$(function(){
	$(".typed").typed({
		strings: ["<span class='developers'>Many more heartfelt responses…. There is nothing more happy for me than seeing a smile on a students face after they learn something new.</span>"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 10,
		// time before typing starts
		startDelay: 1000,
		// backspacing speed
		backSpeed: 0,
		// time before backspacing
		backDelay: 10000,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "_",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
// typed



// typed
$(function(){
	$(".heading-title-typed").typed({
		strings: ["<span class=''>UI</span>","<span class='developers'>UX</span>"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 100,
		// backspacing speed
		backSpeed: 100,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: true,
		// false = infinite
		loopCount: 50,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "-",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
// typed

$(function(){
    $('.main-counter').counterUp({
        delay: 10,
        time: 2000
    });
    $('.module-counter').counterUp({
        delay: 10,
        time: 8000
    });
})