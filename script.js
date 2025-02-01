    // Scroll Progress
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
    });

    // Back to Top
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.style.opacity = window.scrollY > 500 ? '1' : '0';
        backToTop.style.visibility = window.scrollY > 500 ? 'visible' : 'hidden';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Initialize Swiper
    const swiper = new Swiper('.project-swiper', {
        slidesPerView: 1, // one slide per view on mobile
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 40,
            }
        }
    });

    // Mobile Menu Handling
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    /*document.querySelector('.navbar-toggler').addEventListener('click', () => {
        bsCollapse.toggle();
    });*/

    // Close menu on click outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 992 && 
            !e.target.closest('.navbar-toggler') && 
            !e.target.closest('#navbarNav')) {
            bsCollapse.hide();
        }
    });


    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('Particles loaded!');
    });


        // deleted for now
        /*
        // Theme Management
const themeToggle = document.getElementById('themeToggle');

const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Set theme using class names
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        document.documentElement.classList.remove('light-theme');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        // Load particles for dark theme
        reloadParticles('dark');
    } else {
        document.documentElement.classList.add('light-theme');
        document.documentElement.classList.remove('dark-theme');
        themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        // Load particles for light theme
        reloadParticles('light');
    }
};

const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark-theme');
    
    // Toggle between themes
    document.documentElement.classList.toggle('dark-theme', !isDark);
    document.documentElement.classList.toggle('light-theme', isDark);
    
    // Store the theme in localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update the icon based on the theme
    themeToggle.querySelector('i').classList.toggle('fa-moon');
    themeToggle.querySelector('i').classList.toggle('fa-sun');

    // Reload particles on theme change
    reloadParticles(isDark ? 'light' : 'dark');
};

// Event listener for the theme toggle button
themeToggle.addEventListener('click', toggleTheme);

// Initialize the theme based on the saved preference or system preference
initializeTheme();
*/