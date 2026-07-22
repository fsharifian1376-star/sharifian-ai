/*==================================================
Sharifian.ai
Main JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
    Loader
    ==============================*/

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if (!loader) return;

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 600);

    });


    /*==============================
    Mobile Menu
    ==============================*/

    const menuButton = document.querySelector(".menu-toggle");

    const navigation = document.querySelector(".navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            navigation.classList.toggle("active");

            menuButton.classList.toggle("active");

        });

        navigation.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");

                menuButton.classList.remove("active");

            });

        });

    }


    /*==============================
    Reveal Animation
    ==============================*/

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    reveals.forEach(item => observer.observe(item));
        /*==============================
    Cursor Glow
    ==============================*/

    const cursor = document.querySelector(".cursor-glow");

    if (cursor) {

        window.addEventListener("mousemove", (e) => {

            requestAnimationFrame(() => {

                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;

            });

        });

    }

    /*==============================
    AI Core 3D Effect
    ==============================*/

    const aiCore = document.querySelector(".ai-core");

    if (aiCore) {

        document.addEventListener("mousemove", (e) => {

            const x = (window.innerWidth / 2 - e.clientX) / 35;
            const y = (window.innerHeight / 2 - e.clientY) / 35;

            aiCore.style.transform = `
                rotateY(${x}deg)
                rotateX(${-y}deg)
                translateZ(20px)
            `;

        });

        document.addEventListener("mouseleave", () => {

            aiCore.style.transform =
                "rotateY(0deg) rotateX(0deg)";

        });

    }

    /*==============================
    Floating Particles
    ==============================*/

    const particles = document.querySelectorAll(".particle");

    particles.forEach((particle, index) => {

        particle.style.animationDelay = `${index * .45}s`;

        particle.style.animationDuration =
            `${5 + Math.random() * 3}s`;

    });

    /*==============================
    Scroll To Top
    ==============================*/

    const scrollButton = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (!scrollButton) return;

        if (window.scrollY > 500) {

            scrollButton.classList.add("show");

        } else {

            scrollButton.classList.remove("show");

        }

    });

    if (scrollButton) {

        scrollButton.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*==============================
    Background Parallax
    ==============================*/

    const gradients = document.querySelectorAll(".gradient");

    window.addEventListener("mousemove", (e) => {

        gradients.forEach((gradient, index) => {

            const speed = (index + 1) * 12;

            const x =
                (window.innerWidth / 2 - e.clientX) / speed;

            const y =
                (window.innerHeight / 2 - e.clientY) / speed;

            gradient.style.transform =
                `translate(${x}px,${y}px)`;

        });

    });

    /*==============================
    Navbar Blur
    ==============================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 60) {

            navbar.style.background =
                "rgba(6,8,22,.82)";

            navbar.style.borderBottom =
                "1px solid rgba(255,255,255,.08)";

        } else {

            navbar.style.background =
                "rgba(6,8,22,.45)";

            navbar.style.borderBottom =
                "1px solid rgba(255,255,255,.05)";

        }

    });

    /*==============================
    Hero Fade
    ==============================*/

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        const value = window.scrollY * 0.25;

        hero.style.opacity =
            Math.max(1 - value / 500, 0.15);

    });

});
.menu-toggle.active span:nth-child(1){
transform:translateY(7px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2){
opacity:0;
}

.menu-toggle.active span:nth-child(3){
transform:translateY(-7px) rotate(-45deg);
}
.ai-core{
transition:transform .25s ease-out;
transform-style:preserve-3d;
will-change:transform;
}
