// This file contains JavaScript code for interactive features of the website, such as form validation, dynamic content loading, and event handling.

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});