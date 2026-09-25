/**
 * VØID FORM STUDIO - CORE INTERACTIVE ENGINE
 * Custom Neo-Brutalist Animations, Cursor, Sound FX, & Modal Controllers
 */

import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. SYNTHESIZED NEO-BRUTALIST AUDIO ENGINE (Zero external dependencies)
       ========================================================================== */
    let audioCtx = null;
    let soundEnabled = true;

    function initAudio() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) audioCtx = new AudioContext();
        }
    }

    function playClickSound(freq = 600, duration = 0.04) {
        if (!soundEnabled || !audioCtx) return;
        try {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + duration);

            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            // Audio context error or permissions
        }
    }

    const soundToggle = document.getElementById('sound-toggle');
    const soundStatus = document.getElementById('sound-status');
    const soundIcon = document.getElementById('sound-icon');

    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            initAudio();
            soundEnabled = !soundEnabled;
            if (soundEnabled) {
                soundToggle.classList.add('is-active');
                soundStatus.textContent = 'SFX: ON';
                soundIcon.textContent = '🔊';
                playClickSound(800, 0.05);
            } else {
                soundToggle.classList.remove('is-active');
                soundStatus.textContent = 'SFX: OFF';
                soundIcon.textContent = '🔇';
            }
        });
    }

    // Attach click feedback to interactive elements
    document.addEventListener('click', (e) => {
        if (e.target.closest('a, button, input[type="submit"], .ticket-box, .clarity-option-btn')) {
            initAudio();
            playClickSound(520, 0.04);
        }
    });

    /* ==========================================================================
       2. PAGE LOAD GRID DISSOLVE ANIMATION
       ========================================================================== */
    const transitionContainer = document.getElementById('page-transition');
    const transitionCells = document.getElementById('transition-cells');
    
    if (transitionContainer && transitionCells) {
        // Create 144 grid blocks (12 x 12 grid)
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 144; i++) {
            const block = document.createElement('div');
            block.className = 'transition-block';
            fragment.appendChild(block);
        }
        transitionCells.appendChild(fragment);

        const pageLoadTimeline = gsap.timeline({
            defaults: { ease: 'power2.inOut' },
            onComplete: () => {
                gsap.set(transitionContainer, { display: 'none' });
            }
        });

        pageLoadTimeline
            .set('.page-load-logo', { autoAlpha: 0, scale: 0.85 })
            .to('.page-load-logo', { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, 0.2)
            .to('.page-load-logo', { autoAlpha: 1, duration: 0.6 }) // Hold
            .to('.page-load-logo', { autoAlpha: 0, scale: 1.08, duration: 0.25, ease: 'power2.in' })
            .to('.transition-block', {
                opacity: 0,
                duration: 0.15,
                stagger: {
                    amount: 0.45,
                    from: 'random'
                }
            }, '-=0.15');
    }

    /* ==========================================================================
       3. BIG PIXEL CURSOR & CONTEXTUAL BADGE CONTROLLER
       ========================================================================== */
    const cursorBadge = document.getElementById('cursor-badge');
    const cursorText = document.getElementById('cursor-text');
    let currentTarget = null;
    let lastBadgeText = '';

    if (cursorBadge && cursorText && window.innerWidth >= 1024) {
        // Prepare smooth GSAP quickTo
        const xTo = gsap.quickTo(cursorBadge, 'x', { duration: 0.2, ease: 'power3' });
        const yTo = gsap.quickTo(cursorBadge, 'y', { duration: 0.2, ease: 'power3' });

        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const winWidth = window.innerWidth;
            const winHeight = window.innerHeight;

            // Offset badge so it sits naturally next to the arrow
            let offsetX = 16;
            let offsetY = 16;

            // Flip to left if near right edge
            if (mouseX > winWidth * 0.82) {
                offsetX = -cursorBadge.offsetWidth - 12;
            }
            // Flip upward if near bottom edge
            if (mouseY > winHeight * 0.88) {
                offsetY = -cursorBadge.offsetHeight - 12;
            }

            xTo(mouseX + offsetX);
            yTo(mouseY + offsetY);

            if (currentTarget) {
                const text = currentTarget.getAttribute('data-cursor');
                if (text && text !== lastBadgeText) {
                    cursorText.textContent = text;
                    lastBadgeText = text;
                }
            }
        });

        // Hover delegate for any [data-cursor]
        document.addEventListener('mouseover', (e) => {
            const target = e.target.closest('[data-cursor]');
            if (target) {
                currentTarget = target;
                const text = target.getAttribute('data-cursor');
                if (text) {
                    cursorText.textContent = text;
                    lastBadgeText = text;
                    cursorBadge.style.opacity = '1';
                }
            }
        });

        document.addEventListener('mouseout', (e) => {
            const target = e.target.closest('[data-cursor]');
            if (target && !e.relatedTarget?.closest('[data-cursor]')) {
                currentTarget = null;
                cursorBadge.style.opacity = '0';
            }
        });
    }

    /* ==========================================================================
       4. NAVBAR SCROLL EFFECT
       ========================================================================== */
    const mainNav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    }, { passive: true });

    /* ==========================================================================
       5. FULL SCREEN MENU & ANIMATED FLIP CORNERS
       ========================================================================== */
    const menuBtn = document.getElementById('menu-btn');
    const fullMenu = document.getElementById('full-menu');
    const menuNavLinks = document.querySelectorAll('#menu-nav-links .nav-link');
    const navActiveCorners = document.getElementById('nav-active-corners');
    let isMenuOpen = false;

    function toggleMenu(open) {
        isMenuOpen = (open !== undefined) ? open : !isMenuOpen;
        if (isMenuOpen) {
            menuBtn.classList.add('is-open');
            fullMenu.classList.add('is-active');
            document.body.style.overflow = 'hidden';
            playClickSound(750, 0.05);
        } else {
            menuBtn.classList.remove('is-open');
            fullMenu.classList.remove('is-active');
            document.body.style.overflow = '';
            playClickSound(400, 0.05);
        }
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });
    }

    // Moving Corner Brackets across menu links
    if (navActiveCorners && menuNavLinks.length) {
        menuNavLinks.forEach((link) => {
            link.addEventListener('mouseenter', () => {
                link.appendChild(navActiveCorners);
                playClickSound(850, 0.02);
            });

            link.addEventListener('click', () => {
                menuNavLinks.forEach(l => l.classList.remove('is--active'));
                link.classList.add('is--active');
                link.appendChild(navActiveCorners);
                toggleMenu(false);
            });
        });

        // Restore corners to active link when leaving nav
        const navContainer = document.getElementById('menu-nav-links');
        if (navContainer) {
            navContainer.addEventListener('mouseleave', () => {
                const active = document.querySelector('#menu-nav-links .nav-link.is--active');
                if (active) active.appendChild(navActiveCorners);
            });
        }
    }

    /* ==========================================================================
       6. WORK / PROJECTS SCROLL & TAB SYNC
       ========================================================================== */
    const contentItems = document.querySelectorAll('.projects-scroll-content-item');
    const visualItems = document.querySelectorAll('.projects-scroll-visual-item');

    function setActiveProject(index) {
        contentItems.forEach((item, i) => {
            item.classList.toggle('is-active', i === index);
        });
        visualItems.forEach((item, i) => {
            item.classList.toggle('is-active', i === index);
            if (i === index) {
                gsap.to(item, { opacity: 1, duration: 0.3 });
            } else {
                gsap.to(item, { opacity: 0.35, duration: 0.3 });
            }
        });
    }

    // Click on visual cards to activate
    visualItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            setActiveProject(index);
            // Open case study drawer
            const caseKey = item.getAttribute('data-case');
            openCaseDrawer(caseKey);
        });
    });

    // Intersection Observer for scroll synchronization on desktop
    if ('IntersectionObserver' in window && window.innerWidth >= 992) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    const idx = parseInt(entry.target.getAttribute('data-index') || '0', 10);
                    setActiveProject(idx);
                }
            });
        }, {
            threshold: [0.5],
            rootMargin: '-10% 0px -10% 0px'
        });

        visualItems.forEach(item => observer.observe(item));
    }

    /* ==========================================================================
       7. TESTIMONIAL SLIDER
       ========================================================================== */
    const testSlides = document.querySelectorAll('.rl_testimonial15_slide');
    const prevBtn = document.getElementById('prev-test');
    const nextBtn = document.getElementById('next-test');
    let currentSlide = 0;
    let autoSlideInterval = null;

    function showTestimonialSlide(index) {
        if (!testSlides.length) return;
        currentSlide = (index + testSlides.length) % testSlides.length;
        testSlides.forEach((slide, i) => {
            slide.classList.toggle('is-active', i === currentSlide);
            if (i === currentSlide) {
                gsap.fromTo(slide, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' });
            }
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            showTestimonialSlide(currentSlide - 1);
            resetAutoSlide();
        });
        nextBtn.addEventListener('click', () => {
            showTestimonialSlide(currentSlide + 1);
            resetAutoSlide();
        });
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            showTestimonialSlide(currentSlide + 1);
        }, 6000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();

    // Pause on hover
    const sliderContainer = document.getElementById('testimonial-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        sliderContainer.addEventListener('mouseleave', () => startAutoSlide());
    }

    /* ==========================================================================
       8. 3D PERSPECTIVE TICKET TILT
       ========================================================================== */
    const ticketBox = document.getElementById('interactive-ticket');
    if (ticketBox && window.innerWidth >= 800) {
        const wrapper = ticketBox.querySelector('.ticket-wrapper');
        const front = ticketBox.querySelector('.ticket-front');

        ticketBox.addEventListener('mousemove', (e) => {
            const rect = ticketBox.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;

            if (wrapper) {
                wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            }
            if (front) {
                front.style.transform = `translateZ(25px) translateX(${(x - centerX) * 0.04}px) translateY(${(y - centerY) * 0.04}px)`;
            }
        });

        ticketBox.addEventListener('mouseleave', () => {
            if (wrapper) wrapper.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
            if (front) front.style.transform = 'translateZ(0) translateX(0) translateY(0)';
        });
    }

    /* ==========================================================================
       9. INTERACTIVE CLARITY DIAGNOSTIC MODAL
       ========================================================================== */
    const clarityModal = document.getElementById('clarity-modal');
    const clarityModalClose = document.getElementById('clarity-modal-close');
    const openClarityBtns = document.querySelectorAll('.open-clarity-quiz');
    const claritySteps = document.querySelectorAll('.clarity-step');
    const optionBtns = document.querySelectorAll('.clarity-option-btn');
    const scoreBadge = document.getElementById('clarity-score-badge');
    const resultText = document.getElementById('clarity-result-text');

    let clarityTotalScore = 0;
    let currentStep = 1;

    function openClarityModal() {
        clarityTotalScore = 0;
        currentStep = 1;
        showStep(1);
        clarityModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeClarityModal() {
        clarityModal.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    function showStep(stepNum) {
        claritySteps.forEach(step => {
            const s = step.getAttribute('data-step');
            step.classList.toggle('is-active', s === String(stepNum));
        });
    }

    openClarityBtns.forEach(btn => btn.addEventListener('click', openClarityModal));
    if (clarityModalClose) clarityModalClose.addEventListener('click', closeClarityModal);

    // Option selections
    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const score = parseInt(btn.getAttribute('data-score') || '0', 10);
            clarityTotalScore += score;
            currentStep++;

            if (currentStep <= 3) {
                showStep(currentStep);
            } else {
                // Calculate and show result
                showStep('result');
                const percent = Math.min(Math.round((clarityTotalScore / 30) * 100), 100);
                if (percent >= 75) {
                    scoreBadge.textContent = `SCORE: ${percent}% // HIGH MOMENTUM`;
                    resultText.innerHTML = `Your brand core is established. The primary ceiling is visual authority and automation. An elevated <strong>Full Website Flagship</strong> will immediately convert your current traffic into 6-figure commercial retainers.`;
                } else if (percent >= 45) {
                    scoreBadge.textContent = `SCORE: ${percent}% // CRITICAL LEAKAGE`;
                    resultText.innerHTML = `Your audience does not grasp your full value before bouncing. We recommend our <strong>One-Pager High-Impact Redesign</strong> to clarify your messaging and 2.5x discovery bookings.`;
                } else {
                    scoreBadge.textContent = `SCORE: ${percent}% // IMMEDIATE RESTRUCTURING`;
                    resultText.innerHTML = `Your website is currently costing you revenue and positioning. An architectural overhaul across thought, expression, and conversion systems is needed to stop leaving clients on the table.`;
                }
            }
        });
    });

    /* ==========================================================================
       10. CASE STUDY DEEP DIVE DRAWER
       ========================================================================== */
    const caseDrawer = document.getElementById('case-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const drawerTitle = document.getElementById('drawer-title');
    const drawerSubtitle = document.getElementById('drawer-subtitle');
    const drawerBody = document.getElementById('drawer-body');
    const stat1 = document.getElementById('stat-1');
    const stat1Lbl = document.getElementById('stat-1-lbl');
    const stat2 = document.getElementById('stat-2');
    const stat2Lbl = document.getElementById('stat-2-lbl');

    const caseData = {
        'intellete': {
            title: 'Intellete',
            subtitle: 'European Higher Education Gateway Platform',
            stat1: '+240%',
            stat1Lbl: 'Qualified Applications',
            stat2: '3.2 Weeks',
            stat2Lbl: 'Delivery & Go-Live',
            body: 'Intellete was stuck with an uninspired Squarespace page that failed to communicate their elite European academic placement partnerships. We redesigned their complete experience: custom program directory, conversion funnel, responsive mobile styling, and localized storytelling that elevated them to an uncontested category authority.'
        },
        'words-hurt': {
            title: 'WORDS-HURT',
            subtitle: 'Rebellious High-Stakes Copy Studio',
            stat1: '$120K+',
            stat1Lbl: 'Retainers Booked in 60 Days',
            stat2: '3.0 Weeks',
            stat2Lbl: 'Full Production Cycle',
            body: 'Kalyl needed an aggressive, anti-corporate digital platform that honored his theatrical copywriting voice without sacrificing conversion fundamentals. We built an unapologetic neo-brutalist experience with custom micro-animations, high-contrast layouts, and frictionless contact funnels that booked out his roster.'
        },
        'alfi': {
            title: 'Alfi Creative Studio',
            subtitle: 'Elevated Editorial & Brand Identity Studio',
            stat1: '2.8x',
            stat1Lbl: 'Inquiry Size Increase',
            stat2: '4.0 Weeks',
            stat2Lbl: 'Custom Build & CMS',
            body: 'Alannah is a master of high-end editorial aesthetics. Her previous site didn\'t reflect the luxury standards of her commercial studio. We engineered a seamless, cinematic digital showcase with custom Webflow CMS filtering, interactive case study drawers, and automated client intake.'
        }
    };

    function openCaseDrawer(key) {
        const data = caseData[key] || caseData['intellete'];
        drawerTitle.textContent = data.title;
        drawerSubtitle.textContent = data.subtitle;
        stat1.textContent = data.stat1;
        stat1Lbl.textContent = data.stat1Lbl;
        stat2.textContent = data.stat2;
        stat2Lbl.textContent = data.stat2Lbl;
        drawerBody.textContent = data.body;

        caseDrawer.classList.add('is-open');
    }

    function closeCaseDrawer() {
        caseDrawer.classList.remove('is-open');
    }

    if (drawerClose) drawerClose.addEventListener('click', closeCaseDrawer);

    /* ==========================================================================
       11. PROJECT CONSULTATION INQUIRY MODAL
       ========================================================================== */
    const consultModal = document.getElementById('consultation-modal');
    const consultClose = document.getElementById('consult-modal-close');
    const triggerConsultBtns = document.querySelectorAll('.trigger-consultation');
    const consultForm = document.getElementById('consultation-form');

    function openConsultModal() {
        closeCaseDrawer();
        closeClarityModal();
        toggleMenu(false);
        consultModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeConsultModal() {
        consultModal.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    triggerConsultBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        openConsultModal();
    }));

    if (consultClose) consultClose.addEventListener('click', closeConsultModal);

    if (consultForm) {
        consultForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = consultForm.querySelector('.submit-btn');
            btn.textContent = 'TRANSMITTING INQUIRY...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = '✓ TRANSMISSION RECEIVED // WE WILL BE IN TOUCH';
                btn.style.backgroundColor = '#7ec51b';
                setTimeout(() => {
                    closeConsultModal();
                    btn.textContent = 'SUBMIT DISCOVERY INQUIRY';
                    btn.style.backgroundColor = '';
                    btn.disabled = false;
                    consultForm.reset();
                }, 1800);
            }, 600);
        });
    }

    // Close modals on Backdrop Click & ESC Key
    [clarityModal, consultModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeClarityModal();
                closeConsultModal();
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeClarityModal();
            closeConsultModal();
            closeCaseDrawer();
            toggleMenu(false);
        }
    });

    /* ==========================================================================
       12. NEWSLETTER FORM HANDLERS
       ========================================================================== */
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.newsletter-btn');
            if (btn) {
                const origText = btn.textContent;
                btn.textContent = 'SUBSCRIBED ✓';
                btn.style.backgroundColor = '#BEFD66';
                btn.style.color = '#111114';
                setTimeout(() => {
                    btn.textContent = origText;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                    form.reset();
                }, 2500);
            }
        });
    });

    // Console signature for developers
    console.log(
        '%c VØID FORM %c Digital Architecture for Visionary Founders %c https://voidform.design ',
        'background: #033FED; color: #BEFD66; font-weight: bold; padding: 4px 8px; border-radius: 2px;',
        'background: #111114; color: #FFFFFF; padding: 4px 8px;',
        'background: #BEFD66; color: #033FED; font-weight: bold; padding: 4px 8px;'
    );
});
