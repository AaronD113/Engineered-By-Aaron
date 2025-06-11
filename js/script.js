/*function setGradientAngle() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const contentHeight = document.querySelector('.hero-section').offsetHeight;

  // Prioritize window height if it's larger than the content height
  const longestDimension = windowHeight > contentHeight ? windowHeight : contentHeight;

  // Calculate the angle based on the longest dimension
  const angle = (longestDimension / 1200) * 90; // Adjust the divisor (1200) to control the gradient’s transition.

  const gradient = document.querySelector('.hero-section');
  gradient.style.background = `linear-gradient(to bottom, #000000, #FFA07A)`;
}

// Initial call to set the gradient on page load
setGradientAngle();

// Update the gradient on window resize
window.addEventListener('resize', setGradientAngle);*/