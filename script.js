// FAQ Toggle Function
function toggleFaq(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const clickedItem = faqItems[index];

    // Check if the clicked item is already active
    const isActive = clickedItem.classList.contains('active');

    // Close all FAQ items
    faqItems.forEach(item => {
        item.classList.remove('active');
    });

    // If the clicked item wasn't active, open it
    if (!isActive) {
        clickedItem.classList.add('active');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.step-card, .trust-card, .faq-item');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Button click handlers (you can customize these)
document.addEventListener('DOMContentLoaded', () => {
    const primaryButtons = document.querySelectorAll('.btn-primary, .btn-cta');
    const secondaryButtons = document.querySelectorAll('.btn-secondary');

    primaryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Add your booking form logic here
            alert('予約フォームへ移動します');
            // Example: window.location.href = 'booking.html';
        });
    });

    secondaryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Add your LINE redirect logic here
            alert('LINEで相談ページへ移動します');
            // Example: window.open('https://line.me/R/ti/p/@revalue_shimokita', '_blank');
        });
    });
});