function toggleMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger = document.getElementById('hamburger');
      
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        hamburger.textContent = '☰';
      } else {
        mobileMenu.classList.add('active');
        hamburger.textContent = '✕';
      }
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.remove('active');
        document.getElementById('hamburger').textContent = '☰';
      });
    });

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });