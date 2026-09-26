// ================================
// SMOOTH SCROLLING
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// ================================
// NAVIGATION SHADOW ON SCROLL
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 5px 25px rgba(0, 217, 192, 0.12)";
    } else {
        header.style.boxShadow = "none";
    }

});


// ================================
// CONSOLE MESSAGE
// ================================

console.log("Welcome to Fathima Sukaina's Portfolio!");