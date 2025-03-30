// Function to toggle the mobile menu
function toggleMenu() {
    const nav = document.querySelector('.mobile-nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

// Intersection Observer to trigger animations on scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    // Observer options
    const observerOptions = {
        threshold: 0.3, // Trigger when 30% of the section is visible
    };

    // Intersection Observer callback function
    const observerCallback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    // Create an observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
