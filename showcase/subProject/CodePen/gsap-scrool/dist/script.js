var me = $('.bannerWrapper');
var figure = me.find('figure img');
var header = me.find('header');

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: me,
    start: 'top top',
    scrub: 1.4,
    pin: true,
    end: "150%"
    // markers: true
  }
});

tl.to(figure, {
  y: -me.height(),
  scale: 1.5,
  transformOrigin:"center",
  opacity: 0.2
}).to(header, {
  y: -me.height(),
  opacity: 0
}, "-=0.5");