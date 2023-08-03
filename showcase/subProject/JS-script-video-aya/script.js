let sv_side1 = document.querySelector('#sv-side1');
let sv_side2 = document.querySelector('#sv-side2');

window.addEventListener('scroll',()=>{
    sv_side1.style.left = -window.pageYOffset+'px';
    sv_side2.style.left = window.pageYOffset+'px';
});
function animateBlocks(){
    anime({
        targets:'.sba-block',
        translateX: function(){
            return anime.random(-700,700);
        },
        translateY: function(){
            return anime.random(-500,500);
        },
        scale: function(){
            return anime.random(1,5);
        },
        easing: 'linear',
        duration: 3000,
        delay:anime.stagger(10),
        complete: animateBlocks,
    })
}
animateBlocks();