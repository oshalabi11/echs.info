/* script.js */
let currentPhotoIndex = 0;
const photos = document.querySelectorAll('.carousel-image');

function showPhoto(index) {
    photos.forEach((photo, i) => {
        photo.classList.toggle('active', i === index);
    });
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto(currentPhotoIndex);
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    showPhoto(currentPhotoIndex);
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Add scroll event listener for navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });

    // Initialize the first photo
    showPhoto(currentPhotoIndex);
});

// Modal Functions
function openModal(src) {
    const modal = document.getElementById('photoModal');
    const expandedPhoto = document.getElementById('expandedPhoto');
    expandedPhoto.src = src;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('photoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};