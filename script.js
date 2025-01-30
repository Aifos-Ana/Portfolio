// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal elements on scroll
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.project-card, .skill-item');
    
    for(let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

// Initialize reveal on page load
reveal();