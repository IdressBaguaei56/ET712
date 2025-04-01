// color changing part
function changeColor() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomIndex];

    const circle = document.querySelector(".circle");
    circle.style.backgroundColor = newColor.toLowerCase();
    circle.textContent = newColor;
}
// select elements 
let shape = document.querySelector(".shape");
let btncircle = document.querySelector(".btncircle");
let btnsquare = document.querySelector(".btnsquare");
let btnrectangle = document.querySelector(".btnrectangle");

// Add an event to each button
btncircle.addEventListener("click", function () {
    shape.className = "shape circle1";
});

btnsquare.addEventListener("click", function () {
    shape.className = "shape square";
});

btnrectangle.addEventListener("click", function () {
    shape.className = "shape rectangle";
});
function checkAnswer(answer) {
    if (answer === 'fish') {
        alert('Correct! Fish lives in the sea.');
    } else {
        alert('Wrong! Try again.');
    }
}
