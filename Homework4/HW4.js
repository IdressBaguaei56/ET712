console.log("Idress Baguaei");

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

// Lab Excercie 2
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")

// function to scroll the gallery container 
function scrollgallery(pexels){
    let gallercontainer = document.querySelector(".gallercontainer")
    gallercontainer.scrollBy({
        left:pexels,
        behavior: "smooth"    
    })
}

// add a click event to each buttons 
btnright.addEventListener("click", function(){
    scrollgallery(400)
})

btnleft.addEventListener("click", function(){
    scrollgallery(-400)
})

/**
 * example 3 
 */
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