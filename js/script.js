// script.js

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      const target = this.getAttribute('href');
      if (!target) return; // Exit if no target is defined

      const offset = 0; // Adjust if needed to account for the section's position
      const element = document.getElementById(target);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start', //Align to top of the target element
          inline: 'start' //Align to top of the target element
        });
      }
    });
  });
});