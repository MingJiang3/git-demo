$('.wrapper').mouseover(function() {
    $('.blink-left').css('visibility', 'visible');
    $('.eye-left').css('visibility', 'hidden');
  });
  
  $('.wrapper').mouseout(function() {
    $('.blink-left').css('visibility', 'hidden');
    $('.eye-left').css('visibility', 'visible');
  });
  
  var audio = document.getElementsByTagName("audio")[0];
  $(".face").mouseover(function() {
  audio.currentTime = 0.5;
    audio.play();
  });
  
  $(".face").mouseout(function() {
    audio.pause();
    audio.currentTime = 0.5;
  })