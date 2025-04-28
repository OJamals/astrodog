// Mobile menu toggle for small screens
const menuToggle = document.querySelector('.menu-toggle');
const navUL = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    navUL.classList.toggle('open');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu after clicking
            if (navUL.classList.contains('open')) {
                navUL.classList.remove('open');
            }
        }
    });
});

// Generate twinkling stars for background
const starsContainer = document.getElementById('stars');
const starCount = 200;
for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 3 + Math.random() * 7;
    const opacity = 0.5 + Math.random() * 0.5;
    const size = Math.random() * 2;
    star.style.left = x + '%';
    star.style.top = y + '%';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.setProperty('--duration', duration + 's');
    star.style.setProperty('--opacity', opacity);
    starsContainer.appendChild(star);
}

// Animated counters on scroll
const counters = document.querySelectorAll('.count');
const counterSection = document.querySelector('.stats');
let countersStarted = false;
function runCounters() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}
window.addEventListener('scroll', () => {
    const sectionPos = counterSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (!countersStarted && sectionPos < screenPos) {
        runCounters();
        countersStarted = true;
    }
});