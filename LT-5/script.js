// Highlight current page in nav (based on URL)
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Back to Top functionality
const backToTopLink = document.querySelector('a[href="#top"]');
if (backToTopLink) {
    backToTopLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}