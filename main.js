function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  document.querySelectorAll(".theme-toggle").forEach(btn =>
    btn.textContent = body.classList.contains('dark') ? "☀️" : "🌙"
  );
}
if(localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".theme-toggle").forEach(btn => btn.textContent = "☀️");
  });
}
