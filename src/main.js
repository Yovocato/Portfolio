let isMenuOpen = false;

function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const menuLinks = mobileMenu?.querySelectorAll('a');

  if (!menuBtn || !mobileMenu) return;

  // Toggle menu on button click
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      menuIcon.textContent = '✕';
    } else {
      mobileMenu.style.maxHeight = '0';
      menuIcon.textContent = '≡';
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    }
  });

  // Close menu when clicking a link
  menuLinks?.forEach(link => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      mobileMenu.style.maxHeight = '0';
      menuIcon.textContent = '≡';
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (isMenuOpen && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      isMenuOpen = false;
      mobileMenu.style.maxHeight = '0';
      menuIcon.textContent = '≡';
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    }
  });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
}

// Initialize when DOM is ready
function init() {
  initMobileMenu();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}