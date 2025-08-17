const texts = ["Rafhielle", "Allen"];
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetween = 1500;

let textIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("name-text");

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;

        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetween);
    }
}


function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    type();
});