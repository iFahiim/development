// FAVICON

window.onload = function() {
    var favicon = document.getElementById('favicon');
};

// SMOOTH SCROLLING

$('a[href*="#anchor-point"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1');able
            $target.focus(); 
          };
        });
      }
    }
  });

// TRANSITION

var tl = new TimelineMax();

tl.staggerFrom('.hero, .top-bar', 2, {
opacity: 0,
scale: .5,
ease: Power2.easeOut
}, 0.2)

tl.staggerFrom('.animate-header, .animate-body, .discover-js', 1, {
  opacity: 0,
   y: -40,
  ease: Power2.easeInOut
  }, 0.2, "-=1.5")