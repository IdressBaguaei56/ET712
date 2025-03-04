console.log("Idress Baguaei")
console.log("\n ------ Example 1: Function in a variable ------")
const sum = function(num1, num2){
    return num1+num2
}
// calling function 
console.log(sum(5,8))

console.log("\n ------ Example 2: Function in a variable ------")
// Function to return the square root of a number 
let squarenumber = function(n){
    return Math.pow(n,2)
}
// Call function
console.log(squarenumber(5))

console.log("\n ------ Example 3: Arrow Function ------")
let greet = (username) => {
    console.log(`Welcome to JS ${username}`)
}

// Call Fucntion 
greet("Peter Pan")

console.log("\n ------ Example 4: functions with the default parameter ------")
function cubenumber(n=1){
    return Math.pow(n,3)
}
// Call the function 
console.log(`2^3 = ${cubenumber(2)}`)
console.log(`Empty^3 = ${cubenumber()}`)

console.log("\n ------ Example 5: Spread Index ... ------")
nums = [-2, 5, 9, 3, -8]
let maxnum = Math.max(...nums)
console.log(maxnum)

console.log("\n ------ Example 6: Objects------")
// Create a object 
const car={
    type :"Fiat",
    model: 500,
    color: "White",
    price: 23000,

    // methods
    description:function(){
        return `${this.color} ${this.type} cost $ ${this.price}`
    }
}
// calling the object property 'model'
console.log(car.model)
// calling the object method 'description'
console.log(car.description())

console.log("\n ------ Example 7: Objects------")

const hen = {
    //properties
    name: "Helen",
    year: 2025,
    eggcount: 0,

    //method
    layanegg: function(){
        this.eggcount++
        return "EGG"
    }
}
// calling the propeties " eggcount "
console.log(` ${hen.name} has ${hen.eggcount} eggs`)
// calling the method 
console.log(hen.layanegg())
console.log(hen.layanegg())
console.log(` ${hen.name} has ${hen.eggcount} eggs`)
console.log(hen.layanegg())
console.log(` ${hen.name} has ${hen.eggcount} eggs`)

console.log("\n ------ Example 8: Try-Except ------")
function yell(msg){
    try {
        console.log(msg.toUpperCase().repeat(3))
    } catch (e) {  // Added 'e' inside catch parentheses
        console.log(`Error! type of error: ${e.message}`)  // Corrected 'type' spelling
    } finally {
        console.log("End of function 'yell'")
    }
}

// Calling the function
yell("help ")
yell(8)  // This will now properly catch the error if one occurs
console.log("End of example 8 ")

console.log("\n ------ Lab Exercise 1 ------")
// Create an object named mycalculator
const mycalculator = {
    message: "Calculator",
    side: 2,

    // Method to calculate the area of a square
    area_square: function() {
        return Math.pow(this.side, 2)
    },

    // Method to calculate the volume of a cube
    volume_cube: function() {
        return Math.pow(this.side, 3)
    }
}

// Calling the object properties and methods
console.log(mycalculator.message)
console.log(`Area of Square: ${mycalculator.area_square()}`)
console.log(`Volume of Cube: ${mycalculator.volume_cube()}`)

console.log("\n ------ Lab Exercise 2 ------")
// Function to divide numbers safely
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Error performing the division")
        }
        return a / b
    } catch (error) {
        return error.message
    }
}

// Calling the function
console.log(`10 ÷ 2 = ${divideNumbers(10, 2)}`)
console.log(`8 ÷ 0 = ${divideNumbers(8, 0)}`)

