   
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

    // Swiper Initialization
    const swiper = new Swiper('.project-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: { 
            el: '.swiper-pagination',
            clickable: true 
        },
        breakpoints: {
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 1.5 }
        }
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
            // Initialize particles after slight delay to ensure DOM ready
            setTimeout(initParticles, 100);
        };
    
        // Modified initParticles function
        const initParticles = () => {
            const isDarkTheme = document.documentElement.classList.contains('dark-theme');
            const particleColor = isDarkTheme ? '#ffffff' : '#000000';
    
            // Ensure proper cleanup
            if (particlesInstance) {
                particlesInstance.pJS.fn.vendors.destroy();
                const canvas = document.getElementById('particles-js').querySelector('canvas');
                if (canvas) canvas.remove();
                particlesInstance = null;
            }
    
            // Re-initialize with new configuration
            particlesInstance = particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: particleColor },
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: particleColor,
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: { enable: false, rotateX: 600, rotateY: 1200 }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    },
                    modes: {
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 }
                    }
                },
                retina_detect: true
            });
    
            // Force canvas redraw
            if (particlesInstance && particlesInstance.pJS && particlesInstance.pJS.canvas) {
                particlesInstance.pJS.canvas.pJS.fn.particlesRefresh();
            }
        };
    
        // ... rest of your existing code ...
    });