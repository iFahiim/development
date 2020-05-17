// FAVICON

window.onload = function() {
    var favicon = document.getElementById('favicon');
};


// TRANSITION

var tl = new TimelineMax();

tl.staggerFrom('section', 2, {
opacity: 0,
scale: .5,
ease: Power2.easeOut
}, 0.2)

tl.staggerFrom('h1, h2, .logo, nav, p', .5, {
  opacity: 0,
  y: -40,
  ease: Power2.easeInOut
  }, 0.2, "-=2")

tl.staggerFrom('.discover-js', 1, {
  opacity: 0,
   y: -40,
  ease: Power2.easeInOut
  }, 0.2, "-=1.5")