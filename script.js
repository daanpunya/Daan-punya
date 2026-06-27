// Header scroll pe puri tarah hide/show
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 80) {
        header.classList.add('hidden-header');
    } else {
        header.classList.remove('hidden-header');
    }
    lastScroll = currentScroll;
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Donate Button Alert
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            alert("❤️ Thank you for supporting Daan Punya!");
        }
    });
});

// Fade on Scroll (hero skip)
const sections = document.querySelectorAll("section:not(.hero)");
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.7s ease";
    sectionObserver.observe(section);
});

// Counter Animation
function count(id, end) {
    let i = 0;
    const x = setInterval(() => {
        i++;
        const el = document.getElementById(id);
        if (el) el.innerHTML = i + "+";
        if (i >= end) clearInterval(x);
    }, 5);
}
count("mealCount", 1000);
count("donorCount", 500);
count("animalCount", 250);
count("volunteerCount", 120);

// Toggle Menu
function toggleMenu() {
    document.querySelector("nav").classList.toggle("show");
}

// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}

// Scroll to Top
const topButton = document.getElementById("topBtn");
window.onscroll = function () {
    topButton.style.display =
        (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
        ? "block" : "none";
};
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Preloader hide
setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
}, 2000);
