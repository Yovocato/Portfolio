let isMenuOpen = false;

function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  
  if (!mobileMenu || !hamburger) return;
  
  isMenuOpen = !isMenuOpen;
  
  if (isMenuOpen) {
    mobileMenu.classList.remove('hidden');
    hamburger.textContent = '✕';
  } else {
    mobileMenu.classList.add('hidden');
    hamburger.textContent = '☰';
  }
}

function closeMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  
  if (mobileMenu && hamburger) {
    mobileMenu.classList.add('hidden');
    hamburger.textContent = '☰';
    isMenuOpen = false;
  }
}

// Initialize when DOM is ready
function initMenu() {
  const hamburgerBtn = document.getElementById('hamburger');
  const mobileMenuLinks = document.querySelectorAll('#mobileMenu a');
  
  // Attach click handler to hamburger button
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
  }
  
  // Close menu when clicking a link
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      closeMenu();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Close menu if clicking outside
  document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('[onclick="toggleMenu()"]');
    
    if (isMenuOpen && mobileMenu && !mobileMenu.contains(e.target) && !hamburger?.contains(e.target)) {
      closeMenu();
    }
  });
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMenu);
} else {
  initMenu();
}