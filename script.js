 document.addEventListener("DOMContentLoaded", function () {
      const container = document.querySelector('.container');

      // Function to generate 800 boxes
      function generateBoxes() {
        for (let i = 0; i < 800; i++) {
          const box = document.createElement('div');
          box.className = 'square';
          
          // Add transition end event listener
          box.addEventListener('transitionend', () => {
            box.style.backgroundColor = ''; // Reset color after transition
          });

          container.appendChild(box);
        }
      }

      generateBoxes();
    });