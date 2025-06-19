document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('.page-section');
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('img');
  const body = document.body;

  // Show the requested section and hide others
  function showSection(id) {
    sections.forEach(section => section.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
  }

  // SPA-style navigation
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href').replace('#', '');
      showSection(targetId);
      history.pushState(null, '', `#${targetId}`);
      e.preventDefault();
    });
  });

  // Show correct section on initial load
  const initial = window.location.hash.replace('#', '') || 'home';
  showSection(initial);

  // Dark/light mode toggle
  function setTheme(isDark) {
    if (isDark) {
      body.classList.add('dark-mode');
      icon.src = 'assets/light-mode.png';
      icon.alt = 'Switch to light mode';
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      icon.src = 'assets/night-mode.png';
      icon.alt = 'Switch to dark mode';
      localStorage.setItem('theme', 'light');
    }
  }

  themeToggle.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-mode');
    setTheme(isDark);
  });

  // Load theme preference on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') setTheme(true);
  else setTheme(false);
});


