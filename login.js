// Login dropdown toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
  const loginToggles = document.querySelectorAll('.login-toggle');

  loginToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const menu = this.nextElementSibling;
      menu.classList.toggle('show');
    });
  });

  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.login-dropdown')) {
      document.querySelectorAll('.login-menu').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  });
});