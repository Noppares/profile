const img = document.getElementById('imgfile');
const input = document.getElementById('inputfile');

input.onchange = (e) => {
    if (input.files[0])
    img.src = URL.createObjectURL(input.files[0]);
};