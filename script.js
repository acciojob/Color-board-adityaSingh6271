//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.container');

  // Function to generate 800 boxes
  function generateBoxes() {
    for (let i = 0; i < 800; i++) {
      const box = document.createElement('div');
      box.className = 'square';

      // Add hover event listener
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = '#2ecc71'; // Change color on hover
      });

      // Add transition end event listener
      box.addEventListener('transitionend', () => {
        box.style.backgroundColor = ''; // Reset color after transition
      });

      container.appendChild(box);
    }
  }

  generateBoxes();
});
