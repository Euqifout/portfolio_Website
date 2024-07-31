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

/*- Dark mode -*/
var tyingEffect = new Typed(".typed-text", {
    strings: ["Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})