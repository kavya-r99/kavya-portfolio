

window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});

document.querySelectorAll("a").forEach(link => {
    const isInternal =
        link.hostname === window.location.hostname &&
        !link.hasAttribute("target") &&
        link.getAttribute("href") !== "#" &&
        !link.getAttribute("href").startsWith("mailto");

    if (isInternal) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const destination = this.href;

            document.body.classList.remove("fade-in");
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = destination;
            }, 500);
        });
    }
});


const typingElement = document.getElementById("typing");

if (typingElement) {
    const roles = ["Web Developer", "BCA Student", "Future Software Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex--);
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex++);
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}