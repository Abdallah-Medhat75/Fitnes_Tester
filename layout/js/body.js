// Start Global Rules
const shoulders = document.getElementsByClassName("shoulders");
const biceps = document.getElementsByClassName("biceps");
const chests = document.getElementsByClassName("chests");
const six = document.getElementsByClassName("six");
const frontLegs = document.getElementsByClassName("front-legs");
const frontLegsUnder = document.getElementsByClassName("front-legs-under");
const backLegs = document.getElementsByClassName("back-legs");
const backLegsUnder = document.getElementsByClassName("back-legs-under");
const triceps = document.getElementsByClassName("triceps");
const shouldersBack = document.getElementsByClassName("shoulders-back");
const trabasFront = document.getElementsByClassName("trbas-front");
const triUnderFront = document.getElementsByClassName("tri-under-front");
const triUnderBack = document.getElementsByClassName("tri-under-back");
const dirBack = document.getElementsByClassName("dir-back");
const dirFront = document.getElementsByClassName("dir-front");
const upperBack = document.getElementsByClassName("upper-back");
const centerBack = document.getElementsByClassName("center-back");
const handsBack = document.getElementsByClassName("hands-back");
const handsFront = document.getElementsByClassName("hands-front");
// Inner - Start Body Parts Arrays
// let shouldersArray = [...shoulders]; // Error Lexically name
const shouldersArr = [...shoulders];
const bicepsArr = [...biceps];
const chestsArr = [...chests];
const sixArr = [...six];
const frontLegsArr = [...frontLegs];
const frontLegsUnderArr = [...frontLegsUnder];
const backLegsArr = [...backLegs];
const backLegsUnderArr = [...backLegsUnder];
const tricepsArr = [...triceps];
const shouldersBackArr = [...shouldersBack];
const trabasFrontArr = [...trabasFront];
const triUnderFrontArr = [...triUnderFront];
const triUnderBackArr = [...triUnderBack];
const dirBackArr = [...dirBack];
const dirFrontArr = [...dirFront];
const upperBackArr = [...upperBack];
const centerBackArr = [...centerBack];
const handsBackArr = [...handsBack];
const handsFrontArr = [...handsFront];
// Inner - End Body Parts Arrays
// Inner - Start Redirects Array

// Inner - End Redirects Array
// End Global Rules
// Start Functions
function colorChanger(bodyParts) {
    for (let i = 0; i < bodyParts.length; i++) {
        bodyParts[i].onmouseover = function () {
            for (let j = 0; j < bodyParts.length; j++) {
                bodyParts[j].style.fill = "#F00";
            }
        }
        bodyParts[i].onmouseleave = function () {
            for (let j = 0; j < bodyParts.length; j++) {
                bodyParts[j].style.fill = "#FFF";
            }
        }
        bodyParts[i].onclick = function () {
            // location.href= `muscles/${this.className.baseVal}.html`;
            window.open(`muscles/${this.className.baseVal}.html`, '_blank');
        }
    }
}
// End Functions
colorChanger(shouldersArr);
colorChanger(bicepsArr);
colorChanger(chestsArr);
colorChanger(sixArr);
colorChanger(frontLegsArr);
colorChanger(backLegsArr);
colorChanger(backLegsUnderArr);
colorChanger(frontLegsUnderArr);
colorChanger(tricepsArr);
colorChanger(shouldersBackArr);
colorChanger(trabasFrontArr);
colorChanger(triUnderFrontArr);
colorChanger(triUnderBackArr);
colorChanger(dirBackArr);
colorChanger(dirFrontArr);
colorChanger(upperBackArr);
colorChanger(centerBackArr);
colorChanger(handsBackArr);
colorChanger(handsFrontArr);