document.getElementById('grayButton').onclick = switcherGray;
document.getElementById('whiteButton').onclick = switcherWhite;
document.getElementById('blueButton').onclick = switcherBlue;
document.getElementById('yellowButton').onclick = switcherYellow;

function switcherGray(){
    document.getElementsByTagName('body')[0].style.backgroundColor='gray';
    document.getElementsByTagName('body')[0].style.color='white'; 
}
function switcherWhite(){
    document.getElementsByTagName('body')[0].style.backgroundColor='white';
    document.getElementsByTagName('body')[0].style.color='black'; 
}
function switcherBlue(){
    document.getElementsByTagName('body')[0].style.backgroundColor='blue';
    document.getElementsByTagName('body')[0].style.color='white'; 
}
function switcherYellow(){
    document.getElementsByTagName('body')[0].style.backgroundColor='yellow';
    document.getElementsByTagName('body')[0].style.color='black'; 
}