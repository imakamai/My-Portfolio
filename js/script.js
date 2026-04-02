document.addEventListener('DOMContentLoaded', () => {
    
    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('.section');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(a => {
            if (a.getAttribute('href').includes(current) && current !== '') {
                a.style.color = 'var(--color-accent)';
            } else {
                a.style.color = '';
            }
        });
    });
});
