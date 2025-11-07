// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation items on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
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
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add glow effect to conclusion section title when it comes into view
const conclusionSection = document.querySelector('#conclusion');
if (conclusionSection) {
    const conclusionTitle = conclusionSection.querySelector('h2');
    if (conclusionTitle) {
        observer.observe(conclusionTitle);
    }
}

// Add scroll to top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.title = 'Back to top';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize page content
document.addEventListener('DOMContentLoaded', function() {
    // Initialize header typing effect
    const headerText = "Digital Forensics Analyst";
    const headerElement = document.querySelector('.header-content h1');
    
    // Clear the header text initially
    headerElement.textContent = "";
    
    // Add typing effect
    let i = 0;
    const typing = setInterval(function() {
        if (i < headerText.length) {
            headerElement.textContent += headerText.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            
            // Add blinking cursor effect
            const cursor = document.createElement('span');
            cursor.className = 'blink';
            cursor.textContent = '|';
            headerElement.appendChild(cursor);
        }
    }, 100);
});

// Add dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '🌙';
darkModeToggle.id = 'darkModeToggle';
darkModeToggle.title = 'Toggle dark mode';
document.querySelector('.header-bar').appendChild(darkModeToggle);

let isDarkMode = true;
darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        darkModeToggle.innerHTML = '☀️';
    }
});

// Add enhanced hover effect to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
        this.style.background = 'linear-gradient(145deg, var(--tertiary-dark), var(--card-bg))';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.background = 'linear-gradient(145deg, var(--card-bg), var(--tertiary-dark))';
    });
});

// Add parallax effect to header on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
    if (header) {
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Add smooth reveal animations for content sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    sectionObserver.observe(section);
});

// Add fade-in animation for sections
const sectionFadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { rootMargin: '0px 0px -100px 0px' });

// Apply fade-in to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionFadeObserver.observe(section);
});

// Add animation to list items when they come into view
const listObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            entry.target.style.transitionDelay = '0.1s';
        }
    });
}, { rootMargin: '0px 0px -50px 0px' });

// Apply staggered animation to all list items
document.querySelectorAll('li').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    item.style.transitionDelay = (index * 0.05) + 's';
    listObserver.observe(item);
});

// ... existing code ...

// Add glow effect to section titles when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('glow');
        }
    });
}, observerOptions);

document.querySelectorAll('h2').forEach(title => {
    observer.observe(title);
});

// Add animation to flowchart items when they come into view
const flowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'pulse 1s';
        }
    });
}, observerOptions);

document.querySelectorAll('.flow-item').forEach(item => {
    flowObserver.observe(item);
});

// Add CSS for pulse animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes pulse {
        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(10, 132, 255, 0.4); }
        70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(10, 132, 255, 0); }
        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(10, 132, 255, 0); }
    }
`;
document.head.appendChild(style);

// Add fade-in animation for sections
const sectionRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { rootMargin: '0px 0px -100px 0px' });

// Apply fade-in to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionRevealObserver.observe(section);
});