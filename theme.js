// Check saved preference or system preference immediately to prevent flickering
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
  document.body.classList.add('light-mode');
}

// Function to attach to toggle buttons
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Set initial button icon
  updateButtonIcon(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    
    // Save user choice
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateButtonIcon(toggleBtn);
  });
}

function updateButtonIcon(btn) {
  if (document.body.classList.contains('light-mode')) {
    btn.innerHTML = '🌙'; // Click to switch to Night Mode
    btn.setAttribute('title', 'Switch to Night Mode');
    btn.setAttribute('aria-label', 'Switch to Night Mode');
  } else {
    btn.innerHTML = '☀️'; // Click to switch to Light Mode
    btn.setAttribute('title', 'Switch to Light Mode');
    btn.setAttribute('aria-label', 'Switch to Light Mode');
  }
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', setupThemeToggle);
