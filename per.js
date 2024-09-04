document.addEventListener('DOMContentLoaded', function() {
    // Toggle the visibility of the request form on "Send Request" button click
    document.getElementById('sendRequestBtn').addEventListener('click', function() {
        const requestForm = document.getElementById('requestForm');
        requestForm.style.display = requestForm.style.display === 'block' ? 'none' : 'block';
    });

    // Handle the submission of the job description
    document.getElementById('submitRequestBtn').addEventListener('click', function() {
        const jobDescription = document.getElementById('jobDescription').value.trim();
        if (jobDescription) {
            alert('Your request has been submitted.');
            document.getElementById('jobDescription').value = ''; // Clear the textarea
            document.getElementById('requestForm').style.display = 'none'; // Hide the form after submission
        } else {
            alert('Thanks For Your Valueable Response.');
        }
    });  

    // Locomotive Scroll Initialization
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    // Skill bar animation on scroll
    document.addEventListener('scroll', function() {
        const skills = document.querySelectorAll('.skill-bar .progress');
        skills.forEach(skill => {
            skill.style.width = skill.dataset.width;
        });
    });

    // Pop-up description for projects
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.querySelector('.full-description').style.display = 'block';
        });

        project.addEventListener('mouseleave', () => {
            project.querySelector('.full-description').style.display = 'none';
        });
    });
});

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
    const button = document.querySelector('.scroll-to-top');
    if (window.scrollY > 100) { // Show button after scrolling 100px
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

// Smooth scroll to top on button click
document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
