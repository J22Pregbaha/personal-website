// Progress bar
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
	const scrollTop = document.documentElement.scrollTop;
	const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	progressBar.style.width = (scrollTop / scrollHeight * 100) + '%';
}, { passive: true });

// Nav scroll state
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
	navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const id = entry.target.id;
			navLinks.forEach(a => {
				a.classList.toggle('active', a.getAttribute('href') === '#' + id);
			});
		}
	});
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
}, { threshold: 0.08 });

document.querySelectorAll('.reveal, .timeline-item, .project-card').forEach(el => {
	revealObserver.observe(el);
});

// Staggered timeline items
document.querySelectorAll('.timeline-item').forEach((item, i) => {
	item.style.transitionDelay = (i * 0.1) + 's';
});

// Staggered project cards
document.querySelectorAll('.project-card').forEach((card, i) => {
	card.style.transitionDelay = (i * 0.08) + 's';
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;
hamburger.addEventListener('click', () => {
	menuOpen = !menuOpen;
	mobileMenu.classList.toggle('open', menuOpen);
});
document.querySelectorAll('.mm-link').forEach(link => {
	link.addEventListener('click', () => {
		menuOpen = false;
		mobileMenu.classList.remove('open');
	});
});
