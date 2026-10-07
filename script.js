const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton?.setAttribute('aria-expanded','false'); }));
document.querySelectorAll('.whatsapp-link').forEach(link => { const message = link.dataset.message || 'Hello BEDRAGO, I would like more information.'; link.href = `https://wa.me/27825413514?text=${encodeURIComponent(message)}`; link.target = '_blank'; link.rel = 'noopener'; });
document.getElementById('year').textContent = new Date().getFullYear();
