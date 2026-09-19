/**
 * MAHARAJ ESTATES & INFRA - HORIZONTAL HEADER & HERO LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Horizontal Header Scroll Effect
    const siteHeader = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const centerNav = document.getElementById('center-nav');

    if (mobileToggle && centerNav) {
        mobileToggle.addEventListener('click', () => {
            centerNav.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (centerNav.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });
    }

    // 3. Background Image Slider (4–5 second auto change with smooth cross-fade)
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentSlide = 0;

    function nextSlide() {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 4500);

    // 4. Animated Dynamic Subtitle Line (Changes every 4.5 seconds after initial entrance)
    const taglines = [
        "Find Your Perfect Property.",
        "Premium Homes. Better Living.",
        "Build Your Future With Confidence."
    ];
    let taglineIndex = 0;
    const dynamicTagline = document.getElementById('dynamic-tagline');

    function updateTagline() {
        if (!dynamicTagline) return;
        
        // Fade out
        dynamicTagline.classList.remove('fade-in');
        dynamicTagline.classList.add('fade-out');

        setTimeout(() => {
            taglineIndex = (taglineIndex + 1) % taglines.length;
            dynamicTagline.textContent = taglines[taglineIndex];
            
            // Fade in
            dynamicTagline.classList.remove('fade-out');
            dynamicTagline.classList.add('fade-in');
        }, 600);
    }

    // Start cycling tagline after initial entrance finishes
    setTimeout(() => {
        setInterval(updateTagline, 4500);
    }, 2000);

    // 5. Enquire Modal Handling
    const modal = document.getElementById('enquire-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const enquireBtn = document.getElementById('enquire-btn');

    function openModal() {
        if (!modal) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (enquireBtn) enquireBtn.addEventListener('click', openModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);

    // 6. Form Submission
    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('modal-name').value;
            const phone = document.getElementById('modal-phone').value;

            closeModal();
            showToast(`Thank you ${name}! Our senior consultant will call ${phone} shortly.`);
            enquiryForm.reset();
        });
    }

    // 7. Toast System
    function showToast(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--gold-bright);"></i> <span>${message}</span>`;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4500);
    }
});
