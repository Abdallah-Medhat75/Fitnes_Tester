// Start Global Variables
let featButtons = document.querySelectorAll(".features button");
let h3Shower = document.getElementById("shower");
// Start Flags
let clicked = false;
let h3Clicked = false;

// End Flags
// End Global Variables
// Start Functions
[...featButtons].forEach(button => {
    button.onclick = function () {
        if (!clicked) {
            clicked = true;
            button.style.backgroundColor = "lightseagreen";
            button.children[0].style.transform = "translate(calc(100% + 4px), -50%)";
        } else {
            clicked = false;
            button.style.backgroundColor = "rgba(98,121,184,1)";
            button.children[0].style.transform = "translate(0, -50%)";
        }
    }
})
h3Shower.onclick = function () {
    if (!h3Clicked) {
        h3Clicked = true;
        this.nextElementSibling.classList.add("active");
        this.children[0].innerHTML = '<i class="fa-solid fa-minus"></i>';
    } else {
        h3Clicked = false;
        this.nextElementSibling.classList.remove("active");
        this.children[0].innerHTML = '<i class="fa-solid fa-plus"></i>';
    }
}
// End Functions