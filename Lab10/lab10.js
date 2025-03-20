console.log("Idress Baguaei")
// Collect elements 
const myform = document.querySelector("#myform") // Id get # not .(only class)
const greeting = document.querySelector(".gretting")
const greetuser = document.querySelector(".greetuser")
const btnsubmit = document.querySelector(".btnsubmit")
const errormsg = document.querySelector(".errormsg")

window.addEventListener("load", function(){
        // Disable the button when the page is loaded 
        btnsubmit.disabled = true
})

myform.addEventListener("submit", function(event){
    event.preventDefault()
     
    // collect the username 
    let username = document.querySelector("#username")
    let usernamevalue = username.value
       
    // remove whitespace before and after the username and password
    usernamevalue = usernamevalue.trim()
    
    // testing 
    // console.log(usernamevalue)
    // validation of username 
    if(usernamevalue===""){
        alert("Please enter a username")
        return; // stop further execution
    }


    // print the username in the greeting message 
    greetuser.innerHTML = usernamevalue
    greeting.style.display = "block"


    // clear input value 
    username.value = ""
})
let password = document.querySelector("#password")

password.addEventListener("input", function(){
    //collect the password
    let passwordvalue = password.value

    passwordvalue = passwordvalue.trim()

    // validate the password to have 8+ characters
    if (passwordvalue.length <8){
        errormsg.style.display = "block"
        btnsubmit.disabled = true
}else{
        errormsg.style.display = "none"
        btnsubmit.disabled = false
}
})