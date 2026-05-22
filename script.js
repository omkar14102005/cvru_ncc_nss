console.log("CVRU NCC/NSS System Map Active");

document.addEventListener("DOMContentLoaded", () => {
    
    // HAMBURGER TOGGLE SYSTEM
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const icon = menuToggle.querySelector("i");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });
    }

    // SMOOTH SCROLL EXPLORE BUTTON
    const exploreBtn = document.getElementById("explore-btn");
    const aboutSection = document.querySelector(".about");

    if (exploreBtn && aboutSection) {
        exploreBtn.addEventListener("click", () => {
            aboutSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // ACTIVE VIEW PORT METRIC COUNTER
    const counters = document.querySelectorAll(".counter");
    
    const startCounter = (element) => {
        const target = +element.getAttribute("data-target");
        const count = +element.innerText;
        const speed = target / 50; 

        if (count < target) {
            element.innerText = Math.ceil(count + speed);
            setTimeout(() => startCounter(element), 30);
        } else {
            element.innerText = target + "+"; 
        }
    };

    const statsSection = document.getElementById("stats");
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(counter => startCounter(counter));
                    observer.unobserve(statsSection);
                }
            });
        }, { threshold: 0.4 });

        observer.observe(statsSection);
    }

    // GLASSMORPHISM BACKDROP EFFECT ON SCROLL
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(17, 24, 39, 0.85)";
            navbar.style.backdropFilter = "blur(12px)";
        } else {
            navbar.style.background = "#111827";
            navbar.style.backdropFilter = "none";
        }
    });
});
