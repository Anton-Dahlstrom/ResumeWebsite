let typedText = "";
const secretCode = "egg";

document.addEventListener("keypress", function (event) {
    typedText += event.key.toLowerCase();
    if (!secretCode.startsWith(typedText)) {
        typedText = event.key.toLowerCase();
    }
    if (typedText === secretCode) {
        document.getElementById("popup").style.display = "block";
        typedText = "";
    }
});

document.getElementById("changebg").addEventListener("click", function () {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'aquamarine' ? 'white' : 'aquamarine'
});

document.getElementById("popup").addEventListener("click", function () {
    document.getElementById('popup').style.display = 'none'
});



document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            menuBtn.textContent = '✕ Close';
        } else {
            menuBtn.textContent = '☰ Menu';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.header-content') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuBtn.textContent = '☰ Menu';
        }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuBtn.textContent = '☰ Menu';
        }
    });
});


