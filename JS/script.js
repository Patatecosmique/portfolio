document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.2}s`; // Décalage progressif
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});