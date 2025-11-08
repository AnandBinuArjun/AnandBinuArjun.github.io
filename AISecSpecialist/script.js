// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Animation for elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated', 'fadeInUp');
            
            // For timeline items, add visible class
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.classList.add('visible');
            }
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section, .overview-card, .module, .resource-category, .certification, .career-stage, .diagram-container, .timeline-item').forEach(element => {
    observer.observe(element);
});

// Add animation classes to CSS
const style = document.createElement('style');
style.innerHTML = `
    .animated {
        animation-duration: 0.8s;
        animation-fill-mode: both;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 50%, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
    
    .fadeInUp {
        animation-name: fadeInUp;
    }
`;
document.head.appendChild(style);

// Initialize Mermaid diagrams
document.addEventListener('DOMContentLoaded', function() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'dark',
            securityLevel: 'loose',
            flowchart: {
                useMaxWidth: true
            }
        });
    }
    
    // Hide loading animation
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 1000);
    }
});

// Form submission handling (if needed in future)
function handleSubmit(event) {
    event.preventDefault();
    // Add form handling logic here
    console.log('Form submitted');
}

// Add scroll-to-top button functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.title = 'Scroll to top';
scrollToTopButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
};

// Add styles for scroll-to-top button
const buttonStyle = document.createElement('style');
buttonStyle.innerHTML = `
    #scrollToTop {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        color: #000;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 1000;
        box-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
    }
    
    #scrollToTop.visible {
        opacity: 1;
    }
    
    #scrollToTop:hover {
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(0, 255, 157, 0.8);
    }
`;
document.head.appendChild(buttonStyle);

// Add scroll-to-top button to DOM
document.body.appendChild(scrollToTopButton);

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Terminal-style text effect for hero section
function typeText(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = "";
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing effect to hero heading
document.addEventListener('DOMContentLoaded', function() {
    const heroHeading = document.querySelector('.hero-content h1');
    const originalText = heroHeading.textContent;
    heroHeading.textContent = "";
    typeText(heroHeading, originalText, 100);
});

// Dark mode toggle (optional feature)
function initDarkModeToggle() {
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'dark-mode-toggle';
    toggleContainer.innerHTML = `
        <span class="sun">☀️</span>
        <input type="checkbox" id="darkModeToggle" />
        <label for="darkModeToggle" class="toggle-label"></label>
        <span class="moon">🌙</span>
    `;
    
    // Add to header
    const nav = document.querySelector('nav');
    nav.appendChild(toggleContainer);
    
    // Add styles
    const darkModeStyle = document.createElement('style');
    darkModeStyle.innerHTML = `
        .dark-mode-toggle {
            display: flex;
            align-items: center;
            margin-left: 20px;
        }
        
        .dark-mode-toggle span {
            margin: 0 5px;
            font-size: 1.2rem;
        }
        
        #darkModeToggle {
            display: none;
        }
        
        .toggle-label {
            width: 50px;
            height: 25px;
            background-color: #ccc;
            border-radius: 50px;
            position: relative;
            cursor: pointer;
            display: inline-block;
        }
        
        .toggle-label::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
            top: 2.5px;
            left: 2.5px;
            transition: 0.3s;
        }
        
        #darkModeToggle:checked + .toggle-label {
            background-color: var(--primary-color);
        }
        
        #darkModeToggle:checked + .toggle-label::after {
            left: calc(100% - 2.5px);
            transform: translateX(-100%);
        }
    `;
    document.head.appendChild(darkModeStyle);
    
    // Toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('light-mode', this.checked);
    });
}

// Initialize features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode toggle
    // initDarkModeToggle(); // Uncomment to enable
    
    // Add any other initialization code here
});

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    hero.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
});

// Add ripple effect to buttons
document.querySelectorAll('.cta-button, .certification a').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        // Add styles for ripple
        const rippleStyle = document.createElement('style');
        rippleStyle.innerHTML = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 255, 157, 0.7);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyle);
        
        // Position ripple
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // Add ripple to button
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});