// group word
const divftd = document.getElementById('ftd');
const wordsftd = divftd.textContent.split(' ');

divftd.innerHTML = wordsftd.map((word, i) =>
  `<span style="--x: ${i}">${word}</span>`
).join(' ');

// ungroup 
const divftdc = document.getElementById('ftdc');
const wordsftdc = divftdc.textContent.split('');

divftdc.innerHTML = wordsftdc.map((wordc, i) =>
  `<p style="--x: ${i}">${wordc}</p>`
).join(' ');