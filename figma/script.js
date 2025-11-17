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
    });
});

// Progress indicator
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    
    const progressBar = document.querySelector('.progress-indicator');
    if (progressBar) {
        progressBar.style.width = scrollPercent * 100 + '%';
    }
});

// Add active class to navigation items on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animation for content cards when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            // Add staggered animation delay
            const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.1}s`;
        }
    });
}, observerOptions);

document.querySelectorAll('.content-card').forEach(card => {
    observer.observe(card);
});

// Enhanced interactivity for certification cards
const certificationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Add staggered animation delay
            const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.1}s`;
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.certification-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
    certificationObserver.observe(card);
});

// Interactive elements animation
const interactiveObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Add staggered animation delay
            const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.1}s`;
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.interactive-element, .flowchart-container, .highlight-box').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
    interactiveObserver.observe(element);
});

// Timeline animation
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            // Add staggered animation delay
            const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.2}s`;
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});

// Form submission handling (if we add forms later)
document.addEventListener('DOMContentLoaded', function() {
    // Add any DOMContentLoaded event handlers here
    
    // Example: Form submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            console.log('Form submitted');
            
            // Add visual feedback
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = 'Submitting...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    submitButton.innerHTML = 'Submitted!';
                    submitButton.style.background = '#818cf8';
                    submitButton.disabled = false;
                }, 1500);
            }
        });
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 10px 25px rgba(129, 140, 248, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 6px 15px rgba(129, 140, 248, 0.3)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-4px)';
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.content-card, .certification-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
            this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
        });
    });
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.interactive-element, .flowchart-container, .highlight-box');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(6px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
        });
    });
    
    // Add animation to list items
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(4px)';
            this.style.color = '#818cf8';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.color = '';
        });
    });
    
    // Add animation to headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        heading.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(4px)';
        });
        
        heading.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add animation to paragraphs
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('mouseenter', function() {
            this.style.opacity = '1';
            this.style.transform = 'translateY(-1px)';
        });
        
        paragraph.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add animation to links
    const links = document.querySelectorAll('a:not(.nav-links a):not(.cta-button)');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add animation to logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add animation to reading time elements
    const readingTimes = document.querySelectorAll('.reading-time');
    readingTimes.forEach(readingTime => {
        readingTime.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        readingTime.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add educational selection effect to interactive elements
    const selectableElements = document.querySelectorAll('.content-card, .certification-card, .interactive-element, .highlight-box');
    selectableElements.forEach(element => {
        element.classList.add('selection-effect');
    });
    
    // Add loading effect to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.classList.add('loading-effect');
    });
    
    // Add dynamic aura effects to specific elements
    const auraElements = document.querySelectorAll('.timeline-marker, .logo::before, .content-section h2:after');
    auraElements.forEach(element => {
        // These are handled via CSS animations
    });
});