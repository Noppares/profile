$('.section-one').parallax({imageSrc: 'images/eart.jpg'});
$('.section-two').parallax({imageSrc: 'images/sun.jpg'});
// const backgroundVideo = new BackgroundVideo('.sv-side', {
//   src: [
//     'video/Seoul-traffic.mp4'
//   ]
// });

VANTA.CLOUDS({
    el: "#page-clouds",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    skyColor: 0x0,
    cloudColor: 0x202639,
    cloudShadowColor: 0x16497a,
    sunColor: 0x1b1637,
    sunGlareColor: 0x113287,
    sunlightColor: 0x110e0e,
    speed: 0.50
  });

let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let mountains_behind = document.getElementById('mountains_behind');
        let text_behind = document.getElementById('text_behind');
        let main_banner_btn = document.getElementById('main_banner_btn');
        let mountains_front = document.getElementById('mountains_front');
        let header = document.querySelector('.header-menu');

        window.addEventListener('scroll',function(){
            let value_banner = window.scrollY;
            stars.style.left = value_banner * 0.25 + 'px';
            moon.style.top = value_banner * 1.05 + 'px';
            mountains_behind.style.top = value_banner * 0.5 + 'px';
            mountains_front.style.top = value_banner * 0 + 'px';
            text_behind.style.marginRight = value_banner * 4 + 'px';
            text_behind.style.marginTop = value_banner * 1.5 + 'px';
            main_banner_btn.style.marginTop = value_banner * 1.5 + 'px';
            header.style.top = value_banner * 0.5 + 'px';
        })
        