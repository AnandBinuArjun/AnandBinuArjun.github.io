// Check for automatic dark mode preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('auto-dark-mode');
}

// Listen for changes in dark mode preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (e.matches) {
        document.body.classList.add('auto-dark-mode');
    } else {
        document.body.classList.remove('auto-dark-mode');
    }
});

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
                    
        // Trigger haptic feedback
        triggerHapticFeedback('selection');
                    
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
                    
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Haptic feedback function
function triggerHapticFeedback(type) {
    if (navigator.vibrate) {
        switch(type) {
            case 'light':
                navigator.vibrate(10);
                break;
            case 'medium':
                navigator.vibrate(20);
                break;
            case 'heavy':
                navigator.vibrate(30);
                break;
            case 'selection':
                navigator.vibrate([5, 5]);
                break;
            case 'success':
                navigator.vibrate([10, 20, 10]);
                break;
            case 'error':
                navigator.vibrate([100, 50, 100]);
                break;
            case 'impact':
                navigator.vibrate([15, 15, 15]);
                break;
            case 'notification':
                navigator.vibrate([5, 5, 5, 5, 5]);
                break;
            case 'warning':
                navigator.vibrate([10, 5, 10, 5, 10]);
                break;
            case 'confirmation':
                navigator.vibrate([5, 5, 10, 10]);
                break;
            default:
                navigator.vibrate(15);
        }
    }
}

// Enhanced animation functions
function animateElement(element, animationClass) {
    element.classList.add(animationClass);
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, 300);
}

// iOS-style animation functions
function triggerIOSAnimation(element, type) {
    switch(type) {
        case 'bounce':
            element.classList.add('ios-bounce');
            setTimeout(() => element.classList.remove('ios-bounce'), 1000);
            break;
        case 'pop':
            element.classList.add('ios-pop');
            setTimeout(() => element.classList.remove('ios-pop'), 1000);
            break;
        case 'shrink':
            element.classList.add('ios-shrink');
            setTimeout(() => element.classList.remove('ios-shrink'), 1000);
            break;
        case 'flip':
            element.classList.add('ios-flip');
            setTimeout(() => element.classList.remove('ios-flip'), 1000);
            break;
        case 'wobble':
            element.classList.add('ios-wobble');
            setTimeout(() => element.classList.remove('ios-wobble'), 1000);
            break;
        default:
            element.classList.add('ios-bounce');
            setTimeout(() => element.classList.remove('ios-bounce'), 1000);
    }
}

// Progress tracking functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load progress from localStorage
    let progress = localStorage.getItem('cssLearningProgress') || 0;
    updateProgressDisplay(progress);
    
    // Add click handlers to all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            // Get section ID and update progress
            const sectionId = this.id;
            updateProgress(sectionId);
            triggerHapticFeedback('light');
            triggerIOSAnimation(this, 'bounce');
        });
    });
    
    // Reset progress button
    const resetBtn = document.getElementById('reset-progress');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            localStorage.removeItem('cssLearningProgress');
            updateProgressDisplay(0);
            triggerHapticFeedback('success');
            triggerIOSAnimation(this, 'bounce');
        });
    }
    
    // Add keyboard navigation support
    const interactiveElements = document.querySelectorAll('.interactive-element');
    interactiveElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Add haptic feedback on click
        element.addEventListener('click', function() {
            // Determine feedback type based on element
            if (this.classList.contains('btn') || this.classList.contains('fab')) {
                triggerHapticFeedback('impact');
                triggerIOSAnimation(this, 'bounce');
            } else if (this.classList.contains('example')) {
                triggerHapticFeedback('selection');
                triggerIOSAnimation(this, 'wobble');
            } else {
                triggerHapticFeedback('light');
                triggerIOSAnimation(this, 'bounce');
            }
        });
        
        // Add visual feedback on focus
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--ios-blue)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
        });
    });
    
    // Update progress function
    function updateProgress(sectionId) {
        // In a real implementation, you might track specific sections
        // For this demo, we'll just increment progress
        let progress = parseInt(localStorage.getItem('cssLearningProgress')) || 0;
        if (progress < 100) {
            progress = Math.min(100, progress + 10);
            localStorage.setItem('cssLearningProgress', progress);
            updateProgressDisplay(progress);
            triggerHapticFeedback('success');
        }
    }
    
    // Update progress display
    function updateProgressDisplay(progress) {
        const fill = document.getElementById('progress-fill');
        const percent = document.getElementById('progress-percent');
        if (fill && percent) {
            fill.style.width = progress + '%';
            
            // Change color based on progress
            if (progress < 30) {
                fill.style.backgroundColor = 'var(--ios-red)';
            } else if (progress < 70) {
                fill.style.backgroundColor = 'var(--ios-yellow)';
            } else {
                fill.style.backgroundColor = 'var(--ios-green)';
            }
            
            percent.textContent = progress + '%';
        }
    }
    
    // Add scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'btn';
    scrollToTopBtn.id = 'scroll-to-top';
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '20px';
    scrollToTopBtn.style.right = '20px';
    scrollToTopBtn.style.display = 'none';
    scrollToTopBtn.style.zIndex = '1000';
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        // Trigger haptic feedback
        triggerHapticFeedback('selection');
        triggerIOSAnimation(this, 'bounce');
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            // Trigger haptic feedback
            triggerHapticFeedback('light');
            triggerIOSAnimation(this, 'flip');
            
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                this.innerHTML = '☀️';
            } else {
                this.innerHTML = '🌓';
            }
        });
    }
    
    // Add copy functionality to examples
    const examples = document.querySelectorAll('.example.interactive-element');
    examples.forEach(example => {
        example.addEventListener('click', function() {
            // Trigger haptic feedback
            triggerHapticFeedback('light');
            triggerIOSAnimation(this, 'wobble');
            
            // Get the text content of the example
            const text = this.innerText.replace('Click to copy code', '').trim();
            
            // Create a temporary textarea to copy the text
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            // Show iOS-style notification
            showNotification('Code Copied', 'The code snippet has been copied to your clipboard', 'success');
        });
    });
    
    // Add functionality to sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar-section a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Trigger haptic feedback
            triggerHapticFeedback('selection');
            triggerIOSAnimation(this, 'bounce');
            
            // Get the link text
            const linkText = this.textContent;
            
            // Show appropriate notification based on link
            if (linkText.includes('Centering')) {
                showNotification('Code Snippet', 'Copied Flexbox centering technique to clipboard', 'success');
                // In a real app, you would copy the actual code here
            } else if (linkText.includes('Navigation')) {
                showNotification('Code Snippet', 'Copied responsive navigation code to clipboard', 'success');
            } else if (linkText.includes('Reset')) {
                showNotification('Code Snippet', 'Copied CSS reset code to clipboard', 'success');
            } else if (linkText.includes('Button')) {
                showNotification('Code Snippet', 'Copied button styles to clipboard', 'success');
            } else if (linkText.includes('Form')) {
                showNotification('Code Snippet', 'Copied form styling code to clipboard', 'success');
            } else {
                showNotification('Navigation', 'Feature coming soon!', 'info');
            }
        });
    });
    
    // Add search functionality
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // Sample search data (in a real app, this would come from your content)
    const searchData = [
        { title: 'CSS Basics', section: 'beginner', content: 'Learn fundamental CSS concepts' },
        { title: 'Selectors', section: 'beginner', content: 'Target HTML elements with CSS selectors' },
        { title: 'Box Model', section: 'intermediate', content: 'Understand CSS box model properties' },
        { title: 'Flexbox', section: 'intermediate', content: 'Create flexible layouts with Flexbox' },
        { title: 'CSS Grid', section: 'intermediate', content: 'Build complex layouts with CSS Grid' },
        { title: 'CSS Variables', section: 'advanced', content: 'Use custom properties for reusable values' },
        { title: 'Transforms', section: 'advanced', content: 'Apply 2D and 3D transformations' },
        { title: 'Transitions', section: 'advanced', content: 'Create smooth property transitions' },
        { title: 'Animations', section: 'advanced', content: 'Build keyframe-based animations' },
        { title: 'Media Queries', section: 'advanced', content: 'Create responsive designs' }
    ];
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (query.length === 0) {
                searchResults.style.display = 'none';
                return;
            }
            
            const filteredResults = searchData.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.content.toLowerCase().includes(query)
            );
            
            if (filteredResults.length === 0) {
                searchResults.innerHTML = '<div class="search-result">No results found</div>';
                searchResults.style.display = 'block';
                triggerHapticFeedback('warning');
                return;
            }
            
            let resultsHTML = '';
            filteredResults.forEach(item => {
                const highlightedTitle = item.title.replace(new RegExp(`(${query})`, 'gi'), '<span class="search-highlight">$1</span>');
                const highlightedContent = item.content.replace(new RegExp(`(${query})`, 'gi'), '<span class="search-highlight">$1</span>');
                resultsHTML += `
                    <div class="search-result" data-section="${item.section}">
                        <div class="search-result-title">${highlightedTitle}</div>
                        <div class="search-result-content">${highlightedContent}</div>
                    </div>
                `;
            });
            
            searchResults.innerHTML = resultsHTML;
            searchResults.style.display = 'block';
            
            // Add haptic feedback when results are shown
            triggerHapticFeedback('notification');
            
            // Add click events to search results
            const resultElements = searchResults.querySelectorAll('.search-result');
            resultElements.forEach(result => {
                result.addEventListener('click', function() {
                    const section = this.getAttribute('data-section');
                    window.location.hash = section;
                    searchInput.value = '';
                    searchResults.style.display = 'none';
                    triggerHapticFeedback('selection');
                    triggerIOSAnimation(this, 'pop');
                });
            });
        });
        
        // Close search results when clicking outside
        document.addEventListener('click', function(event) {
            if (searchInput && searchResults && 
                !searchInput.contains(event.target) && !searchResults.contains(event.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
    
    // Sticky table of contents with improved positioning
    const tocSection = document.getElementById('toc');
    let tocOffset;
    
    // Update offset on resize
    function updateTocOffset() {
        if (tocSection) {
            tocOffset = tocSection.offsetTop;
        }
    }
    
    // Initial offset calculation
    if (tocSection) {
        updateTocOffset();
    }
    
    window.addEventListener('scroll', function() {
        if (tocSection && window.pageYOffset >= tocOffset) {
            tocSection.classList.add('sticky');
        } else if (tocSection) {
            tocSection.classList.remove('sticky');
        }
    });
    
    // Update offset on window resize
    window.addEventListener('resize', function() {
        if (tocSection) {
            // Small delay to ensure DOM is updated
            setTimeout(updateTocOffset, 100);
        }
    });
    
    // Progress indicator
    const progressDots = document.querySelectorAll('.progress-dot');
    const sectionElements = document.querySelectorAll('section[id]');
    
    // Set up click events for progress dots
    progressDots.forEach(dot => {
        dot.addEventListener('click', function() {
            // Trigger haptic feedback
            triggerHapticFeedback('selection');
            triggerIOSAnimation(this, 'pop');
            
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Update progress indicator on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        sectionElements.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        progressDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-section') === current) {
                dot.classList.add('active');
            }
        });
        
        // Show/hide FAB based on scroll position
        const fab = document.getElementById('fab');
        if (fab && window.pageYOffset > 500) {
            fab.style.display = 'flex';
        } else if (fab) {
            fab.style.display = 'none';
            // Hide menu when scrolling back to top
            const fabMenu = document.getElementById('fab-menu');
            if (fabMenu) {
                fabMenu.style.display = 'none';
            }
        }
    });
    
    // Floating action button functionality
    const fab = document.getElementById('fab');
    const fabMenu = document.getElementById('fab-menu');
    
    if (fab && fabMenu) {
        fab.addEventListener('click', function() {
            if (fabMenu.style.display === 'flex') {
                fabMenu.style.display = 'none';
                triggerHapticFeedback('light');
                triggerIOSAnimation(this, 'shrink');
            } else {
                fabMenu.style.display = 'flex';
                triggerHapticFeedback('impact');
                triggerIOSAnimation(this, 'pop');
            }
        });
        
        // Add click events to fab menu items
        const fabMenuItems = document.querySelectorAll('.fab-menu-item');
        fabMenuItems.forEach(item => {
            item.addEventListener('click', function() {
                // Trigger haptic feedback
                triggerHapticFeedback('light');
                triggerIOSAnimation(this, 'bounce');
                
                const action = this.getAttribute('data-action');
                
                switch(action) {
                    case 'top':
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        showNotification('Navigation', 'Returned to top of page', 'success');
                        break;
                    case 'search':
                        if (searchInput) {
                            searchInput.focus();
                            showNotification('Search', 'Search activated. Type to find content.', 'info');
                        }
                        break;
                    case 'dark-mode':
                        if (darkModeToggle) {
                            darkModeToggle.click();
                            const isLightMode = document.body.classList.contains('light-mode');
                            showNotification('Theme', isLightMode ? 'Light mode activated' : 'Dark mode activated', 'success');
                        }
                        break;
                    case 'print':
                        showNotification('Print', 'Preparing document for printing...', 'info');
                        setTimeout(() => window.print(), 1000);
                        break;
                    case 'share':
                        if (navigator.share) {
                            navigator.share({
                                title: 'CSS Learning Guide',
                                text: 'Check out this comprehensive CSS learning guide!',
                                url: window.location.href
                            }).then(() => {
                                showNotification('Share', 'Content shared successfully!', 'success');
                            }).catch(() => {
                                showNotification('Share', 'Sharing cancelled', 'info');
                            });
                        } else {
                            // Fallback for browsers that don't support Web Share API
                            showNotification('Share', 'Copy this link: ' + window.location.href, 'info');
                        }
                        break;
                    case 'feedback':
                        showNotification('Feedback', 'Thank you for your interest! Please email feedback to css-guide@example.com', 'info');
                        break;
                    case 'help':
                        showNotification('Help', 'Click on any section to track your progress. Use search to find topics quickly.', 'info');
                        break;
                }
                
                fabMenu.style.display = 'none';
            });
        });
        
        // Close fab menu when clicking outside
        document.addEventListener('click', function(event) {
            if (fab && !fab.contains(event.target)) {
                fabMenu.style.display = 'none';
            }
        });
    }
    
    // Reading progress bar
    const readingProgress = document.getElementById('reading-progress');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if (readingProgress) {
            readingProgress.style.width = scrollPercent + '%';
        }
    });
    
    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Add haptic feedback when elements come into view
                if (entry.target.classList.contains('concept-card') || 
                    entry.target.classList.contains('example') ||
                    entry.target.classList.contains('flow-item')) {
                    triggerHapticFeedback('light');
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observe elements
    document.querySelectorAll('.concept-card, .example, .flow-item, .specificity-level, .comparison-item').forEach(el => {
        observer.observe(el);
    });
});

// iOS-style notification system
function showNotification(title, message, type = 'info', duration = 3000) {
    // Create notification container if it doesn't exist
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Add icon based on type
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    else if (type === 'warning') icon = '⚠️';
    else if (type === 'error') icon = '❌';
    
    notification.innerHTML = `
        <div class="notification-icon">${icon}</div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Add to container
    container.appendChild(notification);
    
    // Trigger haptic feedback based on notification type
    if (type === 'success') {
        triggerHapticFeedback('success');
    } else if (type === 'warning') {
        triggerHapticFeedback('warning');
    } else if (type === 'error') {
        triggerHapticFeedback('error');
    } else {
        triggerHapticFeedback('notification');
    }
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
    
    // Auto-hide after duration
    if (duration > 0) {
        setTimeout(() => {
            hideNotification(notification);
        }, duration);
    }
    
    return notification;
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}