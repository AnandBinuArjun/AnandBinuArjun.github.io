// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initializeLoadingScreen();
    initializeNavigation();
    initializeInteractiveFeatures();
    initializeSearch();
    initializeTableOfContents();
});

// Loading Screen
function initializeLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        // For standalone loading page, redirect after delay
        if (window.location.pathname.includes('loading.html')) {
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        } else {
            // For other pages, hide loading screen when content is ready
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1000);
        }
    }
}

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        const navSecondary = document.querySelector('.nav-secondary ul');
        navSecondary.classList.toggle('mobile-active');
    });
    
    const navMain = document.querySelector('.nav-main');
    if (navMain) {
        navMain.appendChild(menuToggle);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Interactive Features
function initializeInteractiveFeatures() {
    // Quiz functionality
    document.querySelectorAll('[data-quiz]').forEach(button => {
        button.addEventListener('click', function() {
            const quizId = this.getAttribute('data-quiz');
            showQuiz(quizId);
        });
    });
    
    // Code playground
    document.querySelectorAll('[data-playground]').forEach(button => {
        button.addEventListener('click', function() {
            const exampleId = this.getAttribute('data-playground');
            showCodePlayground(exampleId);
        });
    });
    
    // Table of Contents toggle
    const tocHeader = document.querySelector('.toc-header');
    if (tocHeader) {
        tocHeader.addEventListener('click', function() {
            const tocContent = document.querySelector('.toc-content');
            const tocToggle = document.querySelector('.toc-toggle');
            tocContent.classList.toggle('hidden');
            tocToggle.textContent = tocContent.classList.contains('hidden') ? '+' : '−';
        });
    }
    
    // Copy code buttons
    document.querySelectorAll('pre').forEach(pre => {
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy Code';
        button.addEventListener('click', function() {
            const code = pre.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            });
        });
        pre.parentNode.insertBefore(button, pre.nextSibling);
    });
    
    // Feedback system
    document.querySelectorAll('.feedback-btn').forEach(button => {
        button.addEventListener('click', function() {
            const feedbackType = this.getAttribute('data-feedback');
            handleFeedback(feedbackType);
        });
    });
    
    // Progress tracking
    initializeProgressTracking();
}

// Quiz System
function showQuiz(quizId) {
    const quizzes = {
        "html-basics-quiz": {
            title: "HTML Basics Quiz",
            questions: [
                {
                    question: "What does HTML stand for?",
                    options: [
                        "Hyper Text Markup Language",
                        "High Tech Modern Language",
                        "Home Tool Markup Language"
                    ],
                    correct: 0
                },
                {
                    question: "Which tag is used to define the main heading of a web page?",
                    options: [
                        "<heading>",
                        "<h1>",
                        "<header>"
                    ],
                    correct: 1
                }
            ]
        },
        "html-basics": {
            title: "HTML Fundamentals Quiz",
            questions: [
                {
                    question: "Which tag is used to create a hyperlink?",
                    options: [
                        "<link>",
                        "<href>",
                        "<a>"
                    ],
                    correct: 2
                },
                {
                    question: "What is the correct HTML element for inserting a line break?",
                    options: [
                        "<lb>",
                        "<break>",
                        "<br>"
                    ],
                    correct: 2
                }
            ]
        },
        "html-forms": {
            title: "HTML Forms Quiz",
            questions: [
                {
                    question: "Which attribute specifies where to send the form data when a form is submitted?",
                    options: [
                        "src",
                        "action",
                        "method"
                    ],
                    correct: 1
                },
                {
                    question: "Which input type is used for entering an email address?",
                    options: [
                        "email",
                        "text",
                        "mail"
                    ],
                    correct: 0
                }
            ]
        },
        "html-semantic": {
            title: "Semantic HTML Quiz",
            questions: [
                {
                    question: "Which semantic tag is used to define the main content of a document?",
                    options: [
                        "<section>",
                        "<main>",
                        "<article>"
                    ],
                    correct: 1
                },
                {
                    question: "What is the purpose of the <nav> element?",
                    options: [
                        "To define navigation links",
                        "To create a new section",
                        "To add navigation styling"
                    ],
                    correct: 0
                }
            ]
        }
    };
    
    const quiz = quizzes[quizId];
    if (!quiz) return;
    
    // Create quiz modal
    const modal = document.createElement('div');
    modal.className = 'quiz-modal';
    modal.innerHTML = `
        <div class="quiz-content">
            <div class="quiz-header">
                <h3>${quiz.title}</h3>
                <span class="close-btn">&times;</span>
            </div>
            <div class="quiz-body">
                <div class="question-container">
                    <!-- Questions will be inserted here -->
                </div>
                <div class="quiz-navigation">
                    <button class="btn" id="prev-btn" disabled>Previous</button>
                    <button class="btn" id="next-btn">Next</button>
                    <button class="btn" id="submit-btn" style="display: none;">Submit</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.close-btn').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Display first question
    let currentQuestion = 0;
    displayQuestion(quiz, currentQuestion, modal);
    
    // Navigation buttons
    const prevBtn = modal.querySelector('#prev-btn');
    const nextBtn = modal.querySelector('#next-btn');
    const submitBtn = modal.querySelector('#submit-btn');
    
    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion(quiz, currentQuestion, modal);
            updateNavigation(currentQuestion, quiz.questions.length, prevBtn, nextBtn, submitBtn);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentQuestion < quiz.questions.length - 1) {
            currentQuestion++;
            displayQuestion(quiz, currentQuestion, modal);
            updateNavigation(currentQuestion, quiz.questions.length, prevBtn, nextBtn, submitBtn);
        }
    });
    
    submitBtn.addEventListener('click', () => {
        // In a real implementation, this would submit the quiz and show results
        alert('Quiz submitted! In a full implementation, this would show your results.');
        document.body.removeChild(modal);
    });
}

function displayQuestion(quiz, index, modal) {
    const questionContainer = modal.querySelector('.question-container');
    const question = quiz.questions[index];
    
    questionContainer.innerHTML = `
        <h4>Question ${index + 1} of ${quiz.questions.length}</h4>
        <p class="question-text">${question.question}</p>
        <div class="options-container">
            ${question.options.map((option, i) => `
                <div class="option">
                    <input type="radio" name="answer" id="option${i}" value="${i}">
                    <label for="option${i}">${option}</label>
                </div>
            `).join('')}
        </div>
    `;
}

function updateNavigation(currentIndex, totalQuestions, prevBtn, nextBtn, submitBtn) {
    prevBtn.disabled = currentIndex === 0;
    
    if (currentIndex === totalQuestions - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

// Code Playground
function showCodePlayground(exampleId) {
    const examples = {
        "basics": {
            title: "HTML Basics Playground",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph.</p>
</body>
</html>`
        },
        "forms": {
            title: "HTML Forms Playground",
            code: `<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <button type="submit">Submit</button>
</form>`
        },
        "semantic": {
            title: "Semantic HTML Playground",
            code: `<header>
    <h1>Website Title</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here.</p>
    </article>
</main>

<footer>
    <p>&copy; 2023 My Website</p>
</footer>`
        }
    };
    
    const example = examples[exampleId];
    if (!example) return;
    
    // Create playground modal
    const modal = document.createElement('div');
    modal.className = 'playground-modal';
    modal.innerHTML = `
        <div class="playground-content">
            <div class="playground-header">
                <h3>${example.title}</h3>
                <span class="close-btn">&times;</span>
            </div>
            <div class="playground-body">
                <div class="code-editor">
                    <textarea id="code-input">${example.code}</textarea>
                </div>
                <div class="preview-panel">
                    <iframe id="preview-frame"></iframe>
                </div>
            </div>
            <div class="playground-footer">
                <button class="btn" id="run-btn">Run Code</button>
                <button class="btn btn-secondary" id="reset-btn">Reset</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.close-btn').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    const codeInput = modal.querySelector('#code-input');
    const previewFrame = modal.querySelector('#preview-frame');
    const runBtn = modal.querySelector('#run-btn');
    const resetBtn = modal.querySelector('#reset-btn');
    
    // Run code
    runBtn.addEventListener('click', () => {
        const code = codeInput.value;
        previewFrame.srcdoc = code;
    });
    
    // Reset code
    resetBtn.addEventListener('click', () => {
        codeInput.value = example.code;
        previewFrame.srcdoc = '';
    });
    
    // Run initial code
    previewFrame.srcdoc = example.code;
}

// Table of Contents
function initializeTableOfContents() {
    const toc = document.querySelector('.table-of-contents');
    if (!toc) return;
    
    const headings = document.querySelectorAll('h2, h3');
    const tocList = document.createElement('ul');
    
    headings.forEach(heading => {
        const link = document.createElement('a');
        link.href = `#${heading.id || heading.textContent.toLowerCase().replace(/\s+/g, '-')}`;
        link.textContent = heading.textContent;
        
        const listItem = document.createElement('li');
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
    
    toc.appendChild(tocList);
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const contentSections = document.querySelectorAll('.content-section');
        
        contentSections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
}

// Feedback System
function handleFeedback(feedbackType) {
    // In a real implementation, this would send feedback to a server
    alert(`Thank you for your ${feedbackType} feedback! This helps us improve the educational content.`);
}

// Progress Tracking
function initializeProgressTracking() {
    // In a real implementation, this would track user progress
    // For now, we'll just simulate some progress
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        // Simulate progress loading
        setTimeout(() => {
            bar.style.width = '25%';
        }, 500);
    });
}