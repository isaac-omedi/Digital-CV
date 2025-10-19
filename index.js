// Portfolio JavaScript - Interactive Features for Omedi Isaac's CV

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initializeNavigation();
    initializeSkillBars();
    initializeScrollAnimations();
    initializeContactForm();
    initializeScrollToTop();
    initializeParallaxEffects();
    initializeEnhancedInteractions();
});

// Navigation Management
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link highlighting based on scroll position
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animated Skill Bars
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBar(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

function animateSkillBar(skillBar) {
    const targetWidth = skillBar.getAttribute('data-width');
    const percentageElement = skillBar.closest('.skill-item').querySelector('.skill-percentage');
    
    // Animate the width
    skillBar.style.width = `${targetWidth}%`;
    skillBar.classList.add('animate');
    
    // Animate the percentage counter
    animateCounter(percentageElement, 0, parseInt(targetWidth), 2000);
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '%';
    }, 16);
}

// Scroll Animations for Elements
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .experience-item, .project-card, .achievement-item, .highlight-item'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Set initial state and observe elements
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Contact Form Validation and Handling
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const formGroups = form.querySelectorAll('.form-group');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Clear previous errors
        formGroups.forEach(group => {
            group.classList.remove('error');
        });

        // Validate each field
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Name validation
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        } else if (name.value.trim().length < 2) {
            showError(name, 'Name must be at least 2 characters long');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Subject validation
        if (!subject.value.trim()) {
            showError(subject, 'Subject is required');
            isValid = false;
        } else if (subject.value.trim().length < 5) {
            showError(subject, 'Subject must be at least 5 characters long');
            isValid = false;
        }

        // Message validation
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Message must be at least 10 characters long');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            showSuccessMessage();
            form.reset();
        }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.closest('.form-group').classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.add('error');
    errorElement.textContent = message;
}

function validateField(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.remove('error');
    
    switch(input.id) {
        case 'name':
            if (!input.value.trim()) {
                showError(input, 'Name is required');
            } else if (input.value.trim().length < 2) {
                showError(input, 'Name must be at least 2 characters long');
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!input.value.trim()) {
                showError(input, 'Email is required');
            } else if (!emailRegex.test(input.value)) {
                showError(input, 'Please enter a valid email address');
            }
            break;
        case 'subject':
            if (!input.value.trim()) {
                showError(input, 'Subject is required');
            } else if (input.value.trim().length < 5) {
                showError(input, 'Subject must be at least 5 characters long');
            }
            break;
        case 'message':
            if (!input.value.trim()) {
                showError(input, 'Message is required');
            } else if (input.value.trim().length < 10) {
                showError(input, 'Message must be at least 10 characters long');
            }
            break;
    }
}

function showSuccessMessage() {
    // Create success notification
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        opacity: 0;
        transform: translateX(300px);
        transition: all 0.3s ease;
    `;
    successDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-check-circle"></i>
            <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    // Animate in
    setTimeout(() => {
        successDiv.style.opacity = '1';
        successDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.style.opacity = '0';
        successDiv.style.transform = 'translateX(300px)';
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 300);
    }, 5000);
}

// Scroll to Top Functionality
function initializeScrollToTop() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(scrollButton);

    // Show/hide based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollButton.style.opacity = '1';
            scrollButton.style.transform = 'translateY(0)';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.transform = 'translateY(20px)';
        }
    });

    // Scroll to top on click
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effects
    scrollButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
        this.style.boxShadow = '0 8px 20px rgba(52, 152, 219, 0.3)';
    });

    scrollButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    });
}

// Parallax and Advanced Scroll Effects
function initializeParallaxEffects() {
    const heroSection = document.querySelector('.hero');
    const heroImage = document.querySelector('.profile-img');
    
    if (heroSection && heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            const rate2 = scrolled * -0.2;
            
            // Subtle parallax effect on hero background
            heroSection.style.transform = `translateY(${rate2}px)`;
            
            // Profile image parallax
            heroImage.style.transform = `translateY(${rate}px) scale(${1 - scrolled * 0.0002})`;
        });
    }
}

// Enhanced Interactions
function initializeEnhancedInteractions() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to skill bars
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', function() {
            const skillBar = this.querySelector('.skill-progress');
            skillBar.style.transform = 'scaleY(1.2)';
            setTimeout(() => {
                skillBar.style.transform = 'scaleY(1)';
            }, 200);
        });
    });

    // Enhanced timeline interactions
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.timeline-content').style.boxShadow = '0 15px 35px rgba(52, 152, 219, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.timeline-content').style.boxShadow = '0 5px 15px rgba(44, 62, 80, 0.1)';
        });
    });
}

// Utility Functions for CV Management
function downloadCV() {
    // Create a temporary link element for CV download
    const link = document.createElement('a');
    
    // Generate CV content
    const cvContent = generateCVContent();
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    link.href = url;
    link.download = 'Omedi_Isaac_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Show download notification
    showDownloadNotification();
}

function generateCVContent() {
    return `
OMEDI ISAAC - CURRICULUM VITAE
================================

CONTACT INFORMATION:
Phone: +256 780 452486
Email: isaacomedi017@gmail.com
GitHub: https://github.com/isaac-omedi
Location: Uganda

PROFESSIONAL SUMMARY:
A dedicated professional with over 5 years of experience in law enforcement and counter-terrorism training, transitioning into software engineering. Combines disciplined law enforcement experience with advanced training capabilities and emerging technical expertise.

CURRENT ROLE:
Police Officer & Counter Terrorism Training Instructor
Uganda Police Force (2019 - Present)

EDUCATION:
- Diploma in Software Engineering (In Progress)
  Victoria University, Uganda (January 2025 intake)
- O Level Certificate (2015-2018)
  Dr. Obote College

PROFESSIONAL EXPERIENCE:
1. Counter Terrorism Training Instructor (2019 - Present)
   Uganda Police Force
   - Design and deliver specialized training programs
   - Conduct counter-terrorism operations and intelligence analysis
   - Lead tactical training sessions
   - Mentor junior officers

2. Police Officer (2019 - Present)
   Uganda Police Force
   - Maintain law and order
   - Conduct criminal investigations
   - Implement community policing initiatives

3. Founder & Graphic Designer (2020 - Present)
   Cindi Graphics
   - Founded digital design company
   - Create visual content for institutions
   - Manage client relationships

TECHNICAL SKILLS:
- Web Development: 92%
- Graphic Design: 89%
- Forensic Intelligence: 95%
- Counter Terrorism Training: 94%
- Leadership & Training: 96%
- Digital Security: 91%
- Data Analysis: 87%
- Project Management: 88%

PROJECTS:
- Portfolio Website (Professional digital CV)
- Design of Flyers for Acaba Secondary School

ACHIEVEMENTS:
- Outstanding Service in counter-terrorism operations
- Training Excellence with over 200 officers trained
- Leadership Recognition in security operations
- Community Impact through policing initiatives

Generated: ${new Date().toLocaleDateString()}
    `;
}

function showDownloadNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #27ae60;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-download"></i>
            <span>CV downloaded successfully!</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(function() {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Error handling for external resources
window.addEventListener('error', function(e) {
    console.log('Resource loading error:', e.target.src || e.target.href);
    // Handle gracefully - could add fallback images or retry logic
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Add loading complete class to body
        document.body.classList.add('loaded');
        
        console.log('Portfolio initialized successfully');
    } catch (error) {
        console.error('Error initializing portfolio:', error);
    }
});