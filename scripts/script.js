 function changeImage(element) {
     var right = '/assets/rass-01.png';
     var left = '/assets/ferdigfaen-01.png';
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
     audioElement.setAttribute('src', '/assets/277466__craftport__the-sound-of-a-forest-after-rain-drops-falling-on-ferns-rear.wav');
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
