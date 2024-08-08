document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-item a'); // Assuming links are directly under .nav-item
    const currentURL = window.location.href;
    console.log(currentURL);

    navLinks.forEach(link => {
        const linkURL = link.href;

        if (linkURL === currentURL) {
            link.classList.add('active', 'underline-link');
        } else {
            link.classList.remove('active', 'underline-link');
        }
    });
});
