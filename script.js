   
    // Theme Management
    const themeToggle = document.getElementById('themeToggle');
    const initializeTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        if(savedTheme === 'dark') {
            document.documentElement.classList.add('dark-theme');
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }
    };

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark-theme');
        const isDark = document.documentElement.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.querySelector('i').classList.toggle('fa-moon');
        themeToggle.querySelector('i').classList.toggle('fa-sun');
    };

    themeToggle.addEventListener('click', toggleTheme);
    initializeTheme();

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
            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });

// Initialize Swiper
const projectSwiper = new Swiper('.project-swiper', {
    loop: false,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    observer: true, // Watch for DOM changes
    observeParents: true, // Watch parent elements too
    observeSlideChildren: true, // Watch child elements in slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 50
        }
    }
});

// Nested image swipers
document.querySelectorAll('.image-swiper').forEach(swiper => {
    new Swiper(swiper, {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

    // Mobile Menu Handling
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
    
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        bsCollapse.toggle();
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 992 && 
            !e.target.closest('.navbar-toggler') && 
            !e.target.closest('#navbarNav')) {
            bsCollapse.hide();
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        // Theme Management
        const themeToggle = document.getElementById('themeToggle');
        let particlesInstance = null;
    
        const initializeTheme = () => {
            const savedTheme = localStorage.getItem('theme') || 
                             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            if(savedTheme === 'dark') {
                document.documentElement.classList.add('dark-theme');
                themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
            }
        };
    });