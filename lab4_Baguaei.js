/**
 * Idress Baguaei 
 * Feb 11, Function
 */
console.log("Idress Baguaei")

console.log("\n ------ Example 1: Functions ------ ")

// Create a function to prompt ' Hello World'

function msg(){
    console.log(`Hello World`)
}
console.log("\n ------ Example 2: Functions to print 3,2,1 ------ ")

// Example 2: Function to print 3,2,1
function printCount(){
    for(let n = 3; n>0; n--){
        console.log(n)
    }
}
console.log("\n ------ Example 3: Functions with parameters ------ ")
// Pass a name into a function. The functions will prompt the name in all uppercase 
 function greeting(passname){
    passname = passname.toUpperCase()
    console.log(`Welcome to the function ${passname}`)
 }
 // Function that takes two number and prompt the sum of them
 function sum(x,y){
    console.log(`${x} + ${y} = ${x+y}`)
 }

 console.log("\n ------ Example 4: Sanke Eyes ------ ")
// function to print 'sanke eyes' if a 1 and 1 is passed to the function
function snake_eyes(x,y){
    if( x===1 && y===1 )
        console.log(" SNAKE EYES")
    else{
        console.log("Not Snake eyes! ")
    }
}
// Call snake_eyes function
snake_eyes(3,2)
snake_eyes(1,1)

console.log("\n ------ Example 5: Fucntions that returns value  ------ ")
// Function that returns the double of the number. The number is passes to the fucntion 
function doublenumber(n){
    n = n*2
    return n 
}
// call function 
let number = 5
let dbnum = doublenumber(number)
console.log(`The double of number ${number} is ${dbnum}`)

console.log("\n ------ Example 6: Fucntions that returns value  ------ ")
// Fucntion that retuens 'true' if a tempature is greater that 75. Other wise, it returns a 'False' if the tempature is less that or equal to 75 
function checktemp(tempature){
    if(tempature>75){
        return true 
    }
    else{
        return false
    }
}

// call function 
let t = 100 
let temp_result = checktemp(t)
console.log(`Is the tempature grater than 75? ${temp_result}`)

console.log("\n ------ Example 7: Built in Functions  ------ ")
// Built in functions in JS is called as a global variable 
// Math object 
let num_pi = Math.PI
console.log(`JS PI value = ${num_pi}`)
// round () method returns the nearest integer 
console.log(`Round off PI = ${Math.round(num_pi)}`)
// ceil() method returns the round up of a number 
console.log(`ceil method to PI = ${Math.ceil(num_pi)}`)
// pow() method returns the value of base to the power of exponent 
console.log(`2^3 = ${Math.pow(2,3)}`)
// square root methods --> sqrt()
console.log(`squared root of 9 is ${Math.sqrt(9)}`)
// random number generator. random() method returns a random number between 0 - 1 
console.log(`Random number = ${Math.random()}`)
// random number between 1 and 9 
let n = 1 + Math.round(Math.random()*8)
console.log(`Number between 1 and 9 = ${n}`)
console.log("\n ------ Example 8: Random Number  ------ ")
// Funtion to randomly generate a number between -5 and 5
function randnumber(){
    let p = -5 + Math.round(Math.random()*10)
    return p;
}

console.log("\n ------ Example 9: Random Number in a list (array)  ------ ")

// function to randomly pick a color from a list of colors
let colors = ["red", "green", "blue","magneta","gray"]
function randomcolor(){
    let list_size = colors.length // find the length of the list 
    let last_index = list_size -1 // find the last index of the list 
    let random_index = Math.round(Math.random()*last_index) // randomly pick a number 
    return colors[random_index] // return the random picked color 
}
console.log(`color picked = ${randomcolor()}`)

console.log("\n ------ EXERCISE  ------ ")

function checkName() {
    let user;

    while (true) {
        user = prompt("Please enter a name: ");

        // Check if the user clicked Cancel
        if (user === null) {
            alert("You forgot to enter a name. Enter a name again:");
            continue; // Restart the loop
        }

        // Check if the user entered an empty string
        if (user.trim() === "") {
            alert("You forgot to enter a name. Enter a name again:");
            continue; // Restart the loop
        }

        // Check if the user entered a number
        if (!isNaN(user)) {
            alert(`${user} is invalid! Enter a name again:`);
            continue; // Restart the loop
        }

        // If input is valid, exit the loop
        console.log(`Welcome ${user.toUpperCase()} to the class!`);
        break;
    }
}

checkName();

