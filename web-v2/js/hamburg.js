/* ============================================================
   hamburg.js — Hamburger menu controller
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navList   = document.getElementById('nav-list');
  if (!hamburger || !navList) return;

  function openMenu () {
    navList.classList.add('show');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu () {
    navList.classList.remove('show');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    navList.classList.contains('show') ? closeMenu() : openMenu();
  });

  /* Close on nav-link click */
  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* Close when clicking outside */
  document.addEventListener('click', function (e) {
    if (!navList.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  /* Close on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
});