document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu-items');
    const navbar = document.querySelector('.navbar');
  
    // Add toggle functionality on hamburger menu
    toggleButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
    });

    // Change bg color on navbar when scrolling down the page

    function togglenavbarTransparency() {
      if (window.scrollY > 0) {
        navbar.classList.add('navbar-scroll');
      } else {
        navbar.classList.remove('navbar-scroll');
      }
    }

    window.addEventListener('scroll', togglenavbarTransparency);
  });

  // Can write the same code the following way

  // window.addEventListener('scroll', function () {
  //   const navbar = document.querySelector('.navbar');
  
  //   if (window.scrollY > 0) {
  //     navbar.classList.add('navbar-scroll');
  //   } else {
  //     navbar.classList.remove('navbar-scroll');
  //   }
  // });