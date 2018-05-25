// shape rotate effect;

$(document).ready(function() {


    var degrees = 0;
    $('.img').click(function rotateMe(e) {
  
      degrees += 360;
  
      $('.img').css({
  
        'transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-o-transform': 'rotate(' + degrees + 'deg)'
      });  
    })
});

// main class fade in effect;

$(document).ready(function() {
  $('.main').css('display', 'none').fadeIn(2000);
});

$(document).ready(function() {
  $('.shape').css('display', 'none').fadeIn(2500);
});
