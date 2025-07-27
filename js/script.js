const typed = new Typed(".typing", {
  strings: ["Problem Solver", "Frontend Developer", "Java Coder", "DSA Enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const icon = themeToggleBtn.querySelector('i');
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateIcon(currentTheme);
  
  // Toggle theme on button click
  themeToggleBtn.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
  });
  
  // Update icon based on theme
  function updateIcon(theme) {
    if (theme === 'dark') {
      icon.className = 'fas fa-moon';
      icon.setAttribute('title', 'Switch to Light Mode');
    } else {
      icon.className = 'fas fa-sun';
      icon.setAttribute('title', 'Switch to Dark Mode');
    }
  }
  
  // Add smooth transition effect
  document.documentElement.style.transition = 'all 0.3s ease';
});
