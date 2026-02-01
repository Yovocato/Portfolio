const menuBtn = document.getElementById('mobileMenuBtn');
const mobileSidebar = document.getElementById('mobileSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const menuIcon = document.getElementById('menuIcon');
const sidebarLinks = document.querySelectorAll('#mobileSidebar a');

let isSidebarOpen = false;

// Toggle sidebar
function toggleSidebar() {
  isSidebarOpen = !isSidebarOpen;
  
  if (isSidebarOpen) {
    mobileSidebar.classList.remove('hidden');
    sidebarOverlay.classList.remove('hidden');
    setTimeout(() => {
      mobileSidebar.classList.remove('translate-x-full');
      sidebarOverlay.classList.add('opacity-100');
    }, 0);
    menuIcon.textContent = '✕';
  } else {
    mobileSidebar.classList.add('translate-x-full');
    sidebarOverlay.classList.add('opacity-0');
    menuIcon.textContent = '≡';
    setTimeout(() => {
      mobileSidebar.classList.add('hidden');
      sidebarOverlay.classList.add('hidden');
      sidebarOverlay.classList.remove('opacity-0');
    }, 300);
  }
}

// Menu button click
if (menuBtn) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSidebar();
  });
}

// Close sidebar when clicking a link
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    isSidebarOpen = true;
    toggleSidebar();
  });
});

// Close sidebar when clicking overlay
if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', () => {
    if (isSidebarOpen) {
      isSidebarOpen = true;
      toggleSidebar();
    }
  });
}

// Smooth scrolling
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