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
