OCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OMEDI ISAAC - POLICE OFICER & SOFTWARE ENGINEEER</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="#home">OMEDI ISAAC</a>
            </div>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#home" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#education" class="nav-link">Education</a>
                </li>
                <li class="nav-item">
                    <a href="#experience" class="nav-link">Experience</a>
                </li>
                <li class="nav-item">
                    <a href="#skills" class="nav-link">Skills</a>
                </li>
                <li class="nav-item">
                    <a href="#projects" class="nav-link">Projects</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">Contact</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <!-- Header Section -->
    <header class="hero" id="home">
        <div class="hero-content">
            <div class="hero-image">
                <img src="omedi.png" alt="OMEDI ISAAC" class="profile-img">
            </div>
            <div class="hero-text">
                <h1 class="hero-title">OMEDI ISAAC</h1>
                <p class="hero-subtitle">POLICE OFFICER & COUNTER TERROSIM TRAINING INSTRCTOR</p>
                <p class="hero-description">Transitioning from Law Enforcement to Software Engineering</p>
                <div class="hero-contact">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>+256 780 452486</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>isaacomedi017@gmail.com</span>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-github"></i>
                        <a href="https://github.com/isaac-omedi" target="_blank">github.com/isaac-omedi</a>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Uganda</span>
                    </div>
                </div>
                <div class="hero-buttons">
                    <button class="btn-primary" onclick="downloadCV()">
                        <i class="fas fa-download"></i> Download CV
                    </button>
                    <button class="btn-secondary" onclick="scrollToContact()">
                        <i class="fas fa-envelope"></i> Contact Me
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- About Section -->
    <section class="about" id="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p class="lead">A dedicated professional with over 6 years of experience in Law enforcement and Counter-Terrorism Training, now transitioning into the dynamic world of software engineering.</p>
                    
                    <p>My unique background combines disciplined law enforcement experience with advanced training capabilities and emerging technical expertise. As a Counter Terrorism Training Instructor with the Uganda Police Force, I've developed exceptional leadership skills, analytical thinking, and the ability to work under pressure while training junior officers in critical security protocols.</p>
                    
                    <p>Currently pursuing a Diploma in Information System and Technoloy at Victoria University, I bring a distinctive perspective to technology - one that emphasizes security, attention to detail, and systematic problem-solving. My experience in forensic intelligence and digital security provides a strong foundation for cybersecurity and secure software development.</p>
                    
                    <p>Through my company, Cinaville Enterprises, I've demonstrated entrepreneurial spirit and creative technical skills in Graphic Design and digital media. I'm passionate about leveraging technology to solve real-world problems, particularly in security, training, and public service sectors.</p>
                </div>
                <div class="about-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-shield-alt"></i>
                        <h3>Security Expertise</h3>
                        <p>6+ years in Law enforcement and Counter-terrorism operations</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <h3>Training Leadership</h3>
                        <p>Experienced Instructor training  Police Officers at Counter Terrosim School</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-code"></i>
                        <h3>Technical Innovation</h3>
                        <p>Transitioning to software engineering with strong technical foundation</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

<!-- Education Section -->
<section class="education" id="education">
    <div class="container">
        <h2 class="section-title">Education Background</h2>
        <div class="timeline">
            
            <!-- Diploma -->
            <div class="timeline-item">
                <div class="timeline-date">2025</div>
                <div class="timeline-content">
                    <h3>Diploma in Information System and Technology</h3>
                    <p class="institution">Victoria University, Uganda</p>
                    <p class="description">Currently enrolled in a comprehensive software engineering program focusing on modern development practices, system design, and emerging technologies.</p>
                </div>
            </div>

            <!-- A Level -->
            <div class="timeline-item">
                <div class="timeline-date">2018 – 2019</div>
                <div class="timeline-content">
                    <h3>A Level Certificate</h3>
                    <p class="institution">St. Francis Borgia High School, Mukono</p>
                    <p class="description">Successfully completed A Level studies with concentration on sciences and mathematics.</p>
                </div>
            </div>

            <!-- O Level -->
            <div class="timeline-item">
                <div class="timeline-date">2014 – 2018</div>
                <div class="timeline-content">
                    <h3>O Level Certificate</h3>
                    <p class="institution">Dr. Obote College Boroboro, Lira</p>
                    <p class="description">Completed secondary education with focus on mathematics, sciences, and communication skills.</p>
                </div>
            </div>

            <!-- PLE -->
            <div class="timeline-item">
                <div class="timeline-date">2014</div>
                <div class="timeline-content">
                    <h3>PLE Certificate</h3>
                    <p class="Institution">Mantle Day and Boarding Primary School Lira</p>
                </div>
            </div>

            <!-- Police Training - Initial Course -->
            <div class="timeline-item">
                <div class="timeline-date">-</div>
                <div class="timeline-content">
                    <h3>Initial Police Training Course</h3>
                    <p class="institution">Police Training School (PTS) Kabalye, Masindi</p>
                    <p class="description">Successfully completed the initial course of police training. Certificate awarded.</p>
                </div>
            </div>

            <!-- Police Training - CRT -->
            <div class="timeline-item">
                <div class="timeline-date">-</div>
                <div class="timeline-content">
                    <h3>CRT Basic Course</h3>
                    <p class="institution">Counter Terrorism Police Training School</p>
                    <p class="description">Awarded certificate after completing the CRT Basic Course.</p>
                </div>
            </div>

        </div>
    </div>
</section>


    <!-- Experience Section -->
    <section class="experience" id="experience">
        <div class="container">
            <h2 class="section-title">Professional Experience</h2>
            <div class="experience-grid">
                <div class="experience-item">
                    <div class="exp-header">
                        <h3>Counter Terrorism Training Instructor</h3>
                        <span class="exp-period">2019 - Present</span>
                    </div>
                    <p class="exp-company">Uganda Police Force</p>
                    <ul class="exp-description">
                        <li>Design and deliver specialized training programs for  police officers</li>
                        <li>Conduct counter-terrorism operations and intelligence analysis</li>
                        <li>Lead tactical training sessions and security protocol development</li>
                        <li>Mentor and evaluate trainee performance in high-stakes scenarios</li>
                    </ul>
                </div>
                
                <div class="experience-item">
                    <div class="exp-header">
                        <h3>Police Officer</h3>
                        <span class="exp-period">2019 - Present</span>
                    </div>
                    <p class="exp-company">Uganda Police Force</p>
                    <ul class="exp-description">
                        <li>Maintain law and order in assigned jurisdictions</li>
                        <li>Conduct criminal investigations and forensic intelligence gathering</li>
                        <li>Implement community policing initiatives and public safety programs</li>
                        <li>Collaborate with inter-agency teams on security operations</li>
                    </ul>
                </div>
                
                <div class="experience-item">
                    <div class="exp-header">
                        <h3>Founder & Graphic Designer</h3>
                        <span class="exp-period">2020 - Present</span>
                    </div>
                    <p class="exp-company">Cinaville Graphics</p>
                    <ul class="exp-description">
                        <li>Founded and manage digital design company specializing in Graphic design</li>
                        <li>Create Visual Content for Educational Institutions and local businesses</li>
                        <li>Develop brand identities, promotional materials, and digital assets</li>
                        <li>Manage client relationships and project delivery timelines</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="skills" id="skills">
        <div class="container">
            <h2 class="section-title">Technical Skills</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3 class="category-title">
                        <i class="fas fa-code"></i> Technical Development
                    </h3>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">Web Development</span>
                            <span class="skill-percentage">92%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="92"></div>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">Graphic Design</span>
                            <span class="skill-percentage">89%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="89"></div>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">Data Analysis</span>
                            <span class="skill-percentage">87%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="87"></div>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3 class="category-title">
                        <i class="fas fa-shield-alt"></i> Security & Intelligence
                    </h3>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">Forensic Intelligence</span>
                            <span class="skill-percentage">95%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress security" data-width="95"></div>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">Counter Terrorism Training</span>
                            <span class="skill-percentage">94%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress security" data-width="94"></div>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">Digital Security</span>
                            <span class="skill-percentage">91%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress security" data-width="91"></div>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3 class="category-title">
                        <i class="fas fa-users"></i> Leadership & Management
                    </h3>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">Leadership & Training</span>
                            <span class="skill-percentage">96%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress leadership" data-width="96"></div>
                        </div>
                    </div>
                    
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">Project Management</span>
                            <span class="skill-percentage">88%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress leadership" data-width="88"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="projects" id="projects">
        <div class="container">
            <h2 class="section-title">Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div class="project-content">
                        <h3>Portfolio Website</h3>
                        <p class="project-description">Professional digital portfolio showcasing career transition from law enforcement to software engineering. Features responsive design, interactive elements, and modern web technologies.</p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Responsive Design</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                            <a href="https://github.com/isaac-omedi" class="project-link">
                                <i class="fab fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-palette"></i>
                    </div>
                    <div class="project-content">
                        <h3>Counter Terrorism Police Training School Flyers</h3>
                        <p class="project-description">Comprehensive graphic design project creating promotional and informational flyers for Counter Terrorism Police Training Schoool. Focused on engaging visual design and effective communication.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Graphic Design</span>
                            <span class="tech-tag">Adobe Creative Suite</span>
                            <span class="tech-tag">Brand Design</span>
                            <span class="tech-tag">Print Media</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">
                                <i class="fas fa-images"></i> View Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Achievements Section -->
    <section class="achievements" id="achievements">
        <div class="container">
            <h2 class="section-title">Achievements & Recognition</h2>
            <div class="achievements-grid">
                <div class="achievement-item">
                    <i class="fas fa-medal"></i>
                    <h3>Outstanding Service</h3>
                    <p>Recognized for exceptional performance in Counter-terrorism Operations and Training program development</p>
                </div>
                <div class="achievement-item">
                    <i class="fas fa-graduation-cap"></i>
                    <h3>Training Excellence</h3>
                    <p>Successfully trained over 500 Officers in advanced security protocols and tactical operations</p>
                </div>
                <div class="achievement-item">
                    <i class="fas fa-trophy"></i>
                    <h3>Leadership Recognition</h3>
                    <p>Commended for leadership in high-stakes security operations and inter-agency collaboration</p>
                </div>
                <div class="achievement-item">
                    <i class="fas fa-handshake"></i>
                    <h3>Community Impact</h3>
                    <p>Implemented successful community policing initiatives improving public safety and police-community relations</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Let's Connect</h3>
                    <p>I'm always interested in discussing new opportunities, collaborative projects, or sharing insights about the intersection of law enforcement and technology.</p>
                    
                    <div class="contact-details">
                        <div class="contact-detail">
                            <i class="fas fa-phone"></i>
                            <div>
                                <h4>Phone</h4>
                                <p>+256 780 452486</p>
                            </div>
                        </div>
                        <div class="contact-detail">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h4>Email</h4>
                                <p>isaacomedi017@gmail.com</p>
                            </div>
                        </div>
                        <div class="contact-detail">
                            <i class="fab fa-github"></i>
                            <div>
                                <h4>GitHub</h4>
                                <p><a href="https://github.com/isaac-omedi" target="_blank">github.com/isaac-omedi</a></p>
                            </div>
                        </div>
                        <div class="contact-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Location</h4>
                                <p>Uganda</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form class="contact-form" id="contactForm">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required>
                        <div class="error-message"></div>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required>
                        <div class="error-message"></div>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required>
                        <div class="error-message"></div>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                        <div class="error-message"></div>
                    </div>
                    
                    <button type="submit" class="btn-primary">
                        <i class="fas fa-paper-plane"></i> Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-text">
                    <p>&copy; 2026 Omedi Isaac. All rights reserved.</p>
                    <p>Police Officer | Counter Terrorism Instructor | Aspiring Software Engineer</p>
                </div>
                <div class="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="index.js"></script>
</body>
</html>
