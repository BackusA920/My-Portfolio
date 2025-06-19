document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('.page-section');

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
});

GitHubCalendar(".calendar", "BackusA920", {
  responsive: true
});
