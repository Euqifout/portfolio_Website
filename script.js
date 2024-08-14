/*- Menu button appear and dissappear -*/
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if  (menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive"
    }
    else {
        menuBtn.className = "nav-menu"
    }
}

/*- Dark mode -*/

const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

/*- Typing effect -*/
var tyingEffect = new Typed(".typed-text", {
    strings: ["Designer", "Coder...", "Full Stack Dev-Ops","Analyst...", "Database Dev/Admin"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

/*- Scroll effect -*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", {delay: 100});
sr.reveal(".text-info", {delay: 200});
sr.reveal(".text-button", {delay: 200});
sr.reveal(".social_icons", {delay: 200});
sr.reveal(".featured-image", {delay: 200});

sr.reveal(".project-box", {interval: 200});

sr.reveal(".top-headder", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skills", {delay: 100});
srRight.reveal(".skills-box", {delay: 100});

/*- active link -*/
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        }
        else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        } 
    });
}

window.addEventListener("scroll", scrollActive);
