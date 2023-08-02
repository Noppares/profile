document.addEventListener('DOMContentLoaded', function() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const swapButton = document.getElementById('swapButton');
  
    swapButton.addEventListener('click', function() {
      swapPositions(box1, box2);
    });
  
    function swapPositions(element1, element2) {
      element1.style.transform = 'translate(-50%, -50%) scale(0.8)';
      element2.style.transform = 'translate(-50%, -50%) scale(1.2)';
  
      setTimeout(function() {
        element1.style.transform = 'translate(-50%, -50%) scale(1.2)';
        element2.style.transform = 'translate(-50%, -50%) scale(0.8)';
      }, 250);
  
      setTimeout(function() {
        const temp = element1.style.left;
        element1.style.left = element2.style.left;
        element2.style.left = temp;
        element1.style.transform = 'translate(-50%, -50%) scale(1)';
        element2.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 500);
    }
  });
  