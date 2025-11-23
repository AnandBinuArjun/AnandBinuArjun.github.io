// Smooth scrolling for navigation links
// This provides a better user experience when navigating through sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only prevent default for section links, not external links
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Smooth scroll with better easing
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
                
                // Add visual feedback
                this.classList.add('active');
                setTimeout(() => {
                    this.classList.remove('active');
                }, 1000);
            }
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't prevent default for actual section links
            sidebar.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
    
    // Close button functionality
    const sidebarClose = document.querySelector('.sidebar-close');
    if (sidebarClose) {
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }
}

// Add active class to current section in sidebar
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 100) {
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

// Example code buttons functionality
// This allows users to view the complete code for each practical example
function initializeCodeButtons() {
    document.querySelectorAll('.code-btn').forEach(button => {
        button.addEventListener('click', function() {
            const exampleId = this.getAttribute('data-example');
            const modal = document.getElementById('modal-' + exampleId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });
    
    // Close modal when clicking on close button or outside the modal
    document.querySelectorAll('.close, .close-btn').forEach(element => {
        element.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Close modal when pressing Escape key
    window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
}

// Initialize when the page loads
window.addEventListener('load', initializeCodeButtons);

// Add interactive effects to cards
function addCardInteractions() {
    const cards = document.querySelectorAll('.topic-card, .example-card');
    
    cards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--card-shadow)';
        });
    });
}

// Initialize card interactions
window.addEventListener('load', addCardInteractions);