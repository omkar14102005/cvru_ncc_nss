console.log("CVRU NCC/NSS Website Loaded Successfully");

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. HAMBURGER MENU TOGGLE FOR MOBILE
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            // Switch burger icon to 'X' icon when active
            const icon = menuToggle.querySelector("i");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });
    }

    // 2. EXPLORE MORE BUTTON - SMOOTH SCROLL EFFECT
    const exploreBtn = document.getElementById("explore-btn");
    const aboutSection = document.querySelector(".about");

    if (exploreBtn && aboutSection) {
        exploreBtn.addEventListener("click", () => {
            aboutSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // 3. AUTOMATED LIVE STATS COUNTER EFFECT
    const counters = document.querySelectorAll(".counter");
    
    const startCounter = (counterElement) => {
        const target = +counterElement.getAttribute("data-target");
        const count = +counterElement.innerText;
        // Adjust speed here (higher division = slower increment)
        const speed = target / 50; 

        if (count < target) {
            counterElement.innerText = Math.ceil(count + speed);
            setTimeout(() => startCounter(counterElement), 30);
        } else {
            counterElement.innerText = target + "+"; // Append plus suffix at conclusion
        }
    };

    // Trigger animation dynamically when section appears on view viewport
    const statsSection = document.getElementById("stats");
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(counter => startCounter(counter));
                    observer.unobserve(statsSection); // Prevent re-triggering
                }
            });
        }, { threshold: 0.4 }); // Triggers when 40% of section is visible

        observer.observe(statsSection);
    }

    // 4. SMART GLASSMORPHIC NAVBAR BACKDROP ON SCROLL
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(17, 24, 39, 0.85)";
            navbar.style.backdropFilter = "blur(12px)";
            navbar.style.webkitBackdropFilter = "blur(12px)";
        } else {
            navbar.style.background = "#111827";
            navbar.style.backdropFilter = "none";
            navbar.style.webkitBackdropFilter = "none";
        }
    });
});
