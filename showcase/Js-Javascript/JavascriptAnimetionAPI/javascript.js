let quare = document.getElementById('square');
square.addEventListener('click', function(){
        square.className += " animation";
});

let moveAndChangeColor = [
    {
        transform: 'translateX(0)',
        background: '#2196f3'
    },
    {
        offset:0.8,        
        transform: 'translateX(100px)',
        background: '#2196f3'
    },
    {             
        transform: 'translateX(100px)',
        background: '#ef5350'
    }
];

let circle = document.getElementById('circle');

circle.addEventListener('click', function(){
    circle.animate(moveAndChangeColor, {
        duration:400,
        fill:'forwards',
    })
});

let spinner = document.getElementById('spinner');
let spinnerAnimation = spinner.animate([
    {
        transfrom: 'rotate(0)',
    },
    {
        transform: 'rotate(359deg)'
    }
],{
    duration:1000,
    iterations:Infinity
})

document.getElementById('pause').addEventListener('click', function(){
    spinnerAnimation.pause();
})
document.getElementById('play').addEventListener('click', function(){
    spinnerAnimation.play();
})
document.getElementById('reverse').addEventListener('click', function(){
    spinnerAnimation.reverse();
})
document.getElementById('cancel').addEventListener('click', function(){
    spinnerAnimation.cancel();
})
document.getElementById('half').addEventListener('click', function(){
    spinnerAnimation.playbackRate = 0.5;
})
document.getElementById('normal').addEventListener('click', function(){
    spinnerAnimation.playbackRate = 1;
})
document.getElementById('double').addEventListener('click', function(){
    spinnerAnimation.playbackRate = 2;
})
document.getElementById('navbar-nav').addEventListener('click', function(){
})

