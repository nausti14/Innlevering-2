function changeImage(element) {
    var right = 'assets/ferdigfaen-01.png';
    var left = 'assets/rass-01.png';
    element.src = element.bln ? right : left;
    element.bln = !element.bln;
    if (!element.bln) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}
var audioElement;
$(document).ready(function () {
    audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/277466__craftport__the-sound-of-a-forest-after-rain-drops-falling-on-ferns-rear.wav');
    audioElement.setAttribute('autoplay', 'autoplay');
    $.get();
    audioElement.addEventListener('load', function () {
        audioElement.play();
    }, true);

    if ('yesLoop' == 'yesLoop') {
        audioElement.loop = true;
    } else {
        audioElement.loop = false;
    }
});

//Fade in og ut funskjonen
$(window).on("load", function () {
    function fade() {
        $('.fade').each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            /* If the object is completely visible in the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css('opacity') == 0) {
                    $(this).fadeTo(500, 1);
                }
            } else { //object goes out of view (scrolling up)
                if ($(this).css('opacity') == 1) {
                    $(this).fadeTo(500, 0);
                }
            }
        });
    }
    fade(); //Fade in completely visible elements during page-load
    $(window).scroll(function () {
        fade();
    }); //Fade in elements during scroll
});

//Scroll BackToTop funskjonen
$(document).ready(function(){
	//Click event som scroller tilbake til toppen
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});