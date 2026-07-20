// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");


function revealOnScroll(){

    const windowHeight = window.innerHeight;


    reveals.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();




// Smooth movement for AI particles

const particles = document.querySelectorAll(".particles i");


particles.forEach((particle,index)=>{

    particle.style.animationDelay = `${index * .4}s`;

});




// Small mouse interaction for AI Core

const aiCore = document.querySelector(".ai-core");


document.addEventListener("mousemove",(e)=>{


    if(!aiCore) return;


    const x = (window.innerWidth / 2 - e.clientX) / 80;

    const y = (window.innerHeight / 2 - e.clientY) / 80;


    aiCore.style.transform = 
    `translate(${x}px, ${y}px)`;


});
