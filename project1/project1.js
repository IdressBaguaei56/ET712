// The top function 
let topcontainer = document.querySelector(".topcontainer")

window.addEventListener("scroll",function(){
    let pxTop = window.scrollY
    console.log(pxTop)
    if(pxTop>100){
        topcontainer.computedStyleMap.display = "block"
    }    
    else{
        topcontainer.computedStyleMap.display = "none"
    }
})
// color changing part
function changeColor() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Pink", "Teal", "Brown"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomIndex];

    const circle = document.querySelector(".circle");
    circle.style.backgroundColor = newColor.toLowerCase();
    circle.textContent = newColor;
}
// select elements 
let shape = document.querySelector(".shape");
let btntriangle = document.querySelector(".btntriangle");
let btnoval = document.querySelector(".btnoval");
let btnhexagon = document.querySelector(".btnhexagon");
let btndiamond = document.querySelector(".btndiamond");
let btnoctagon = document.querySelector(".btnoctagon");
let btnsquare = document.querySelector(".btnsquare");
let btnstar = document.querySelector(".btnstar");
let btnrectangle = document.querySelector(".btnrectangle");
let btncrescent = document.querySelector(".btncrescent");
let btnmoon = document.querySelector(".btnmoon");

// Add event listeners for each button to create the respective shape
btntriangle.addEventListener("click", () => {
    createShape('triangle');
});

btnoval.addEventListener("click", () => {
    createShape('oval');
});

btnhexagon.addEventListener("click", () => {
    createShape('hexagon');
});

btndiamond.addEventListener("click", () => {
    createShape('diamond');
});

btnoctagon.addEventListener("click", () => {
    createShape('octagon');
});

btnsquare.addEventListener("click", () => {
    createShape('square');
});

btnstar.addEventListener("click", () => {
    createShape('star');
});

btnrectangle.addEventListener("click", () => {
    createShape('rectangle');
});

btncrescent.addEventListener("click", () => {
    createShape('crescent');
});

btnmoon.addEventListener("click", () => {
    createShape('moon');
});

function createShape(shapeClass) {
    // Remove any existing shapes
    let existingShape = document.querySelector('.shape-created');
    if (existingShape) {
        existingShape.remove();
    }

    // Create a new div element for the shape
    let newShape = document.createElement('div');
    newShape.classList.add(shapeClass, 'shape-created');
    shape.appendChild(newShape);
}


function createShape(shapeClass) {
    // Remove any existing shapes
    let existingShape = document.querySelector('.shape-created');
    if (existingShape) {
        existingShape.remove();
    }

    // Create a new div element for the shape
    let newShape = document.createElement('div');
    newShape.classList.add(shapeClass, 'shape-created');
    shape.appendChild(newShape);

    // Center the new shape inside the container
    newShape.style.position = 'absolute';
    newShape.style.top = '50%';
    newShape.style.left = '50%';
    newShape.style.transform = 'translate(-50%, -50%)';
}
function checkAnswer(answer) {
    // Correct answers are 'fish', 'dolphin', 'shark', and 'whale'
    const correctAnswers = ['fish', 'dolphin', 'shark', 'whale'];

    if (correctAnswers.includes(answer)) {
        alert('Correct! ' + answer.charAt(0).toUpperCase() + answer.slice(1) + ' is a sea animal.');
    } else {
        alert('Wrong! Try again.');
    }
}

// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Collect elements
    const myform = document.querySelector("#myform");
    const greeting = document.querySelector(".gretting");
    const greetuser = document.querySelector(".greetuser");
    const btnsubmit = document.querySelector(".btnsubmit");

    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    // Disable submit button on page load
    btnsubmit.disabled = true;  // Initially disable the submit button

    // Function to check if the form is valid
    function checkFormValidity() {
        let usernameValue = username.value.trim();
        let emailValue = email.value.trim();
        let passwordValue = password.value.trim();
        let hasSpecialChar = false;

        // Check if the password contains #, $, or %
        if (passwordValue.includes("#") || passwordValue.includes("$") || passwordValue.includes("%")) {
            hasSpecialChar = true;
        }

        // Enable submit button only if all conditions are met
        if (usernameValue !== "" && emailValue.includes("@") && hasSpecialChar) {
            btnsubmit.disabled = false;
        } else {
            btnsubmit.disabled = true;
        }
    }

    // Add input event listeners to validate fields in real-time
    username.addEventListener("input", checkFormValidity);
    email.addEventListener("input", checkFormValidity);
    password.addEventListener("input", checkFormValidity);

    // Handle form submission
    myform.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let usernameValue = username.value.trim();
        let emailValue = email.value.trim();
        let passwordValue = password.value.trim();
        let hasSpecialChar = false;

        // Check password for required characters
        if (passwordValue.includes("#") || passwordValue.includes("$") || passwordValue.includes("%")) {
            hasSpecialChar = true;
        }

        // Final validation before submission
        if (usernameValue === "") {
            alert("Please enter a username");
            return;
        }
        if (!emailValue.includes("@")) {
            alert("Email must contain '@'.");
            return;
        }
        if (!hasSpecialChar) {
            alert("Password must contain at least one of these: #, $, %.");
            return;
        }

        // Show success message
        greetuser.innerHTML = usernameValue;
        greeting.style.display = "block";  // Ensure the success message container is visible

        // Clear form
        myform.reset();
        btnsubmit.disabled = true; // Disable submit button after form is cleared
    });
});
