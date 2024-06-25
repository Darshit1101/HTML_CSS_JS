document.querySelectorAll('.accordion-button').forEach(item => {
    item.addEventListener('click', event => {
      // Toggle the class when the accordion button is clicked
      item.classList.toggle('clicked-accordion-button');
    });
  });
  