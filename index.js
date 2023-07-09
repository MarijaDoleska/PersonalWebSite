
  var viewDetailsButtons = document.querySelectorAll('.btn');
  viewDetailsButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Get the URL of the product details page from the button's "href" attribute
      var productDetailsURL = this.getAttribute('href');

      // Open the product details page in a new tab/window
      window.open(productDetailsURL, '_blank');
    });
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    easing: 'easeInOutCubic'
  });
