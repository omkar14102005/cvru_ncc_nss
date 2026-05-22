console.log("CVRU NCC/NSS Website Loaded Successfully");

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EXPLORE MORE BUTTON - SMOOTH SCROLL EFFECT
    // Alert box dikhane ki jagah user ko agle section par smoothly le jana behtar hai
    const exploreBtn = document.querySelector(".hero button");
    const aboutSection = document.querySelector(".about");

    if (exploreBtn && aboutSection) {
        exploreBtn.addEventListener("click", () => {
            aboutSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    // 2. SMOOTH SCROLL FOR NAVBAR LINKS
    // Jab user menu items par click karega to page jhatke se nahi, smoothly scroll hoga
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            
            if (targetId.startsWith("#")) {
                e.preventDefault();
                
                // Agar href="#" hai to top par jayega, nahi to specific section par
                const targetSection = targetId === "#" ? document.body : document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // 3. NAVBAR SCROLL EFFECT (Optional Glassmorphism look)
    // Scroll karne par navbar thoda transparent ho jayega jo premium feel deta hai
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(17, 24, 39, 0.9)";
            navbar.style.backdropFilter = "blur(8px)";
        } else {
            navbar.style.background = "#111827";
            navbar.style.backdropFilter = "none";
        }
    });

});