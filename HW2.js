/*
Idress Baguaei
Homework 2 - Functions, Loops, and conditinal statement
*/

console.log("\n====== Exercise 1: name_counting() Function ======")

// Function to count names with less than 5 characters
function name_counting(names) {
    let count = 0;

    // Loop through the array of names
    for (let i = 0; i < names.length; i++) {
        if (names[i].length < 5) {
            count++;  // Increment count if name length is less than 5
        }
    }

    return count;  // Return the total count of names with less than 5 characters
}

// Test the function with an array of names
let names = ["Ann", "Peter", "Patricia", "Sam", "Katerina"];
console.log(`Number of names with less than 5 characters: ${name_counting(names)}`);

console.log("\n====== Exercise 2: checkNum() Function ======")

// Function to validate user input and check if it's even or odd
function checkNum() {
    let input; // Store user input

    // Loop until a valid number is entered
    while (true) {
        input = prompt("Enter a number:");

        // If the user cancels, prompt again
        if (input === null) {
            input = prompt("Please provide a valid number:");
            continue;
        }

        // Convert input to an integer (base 10) to ensure it's a whole number
        let number = parseInt(input, 10);

        // Check if the input is a valid number
        if (!isNaN(number) && input.trim() !== "") {
            if (number % 2 === 0) {
                return "Even number detected!";
            } else {
                return "Odd number detected!";
            }
        }

        // Reprompt if the input is invalid
        input = prompt("That's not a valid number! Try again:");
    }
}

// Call function and display result
let output = checkNum();
console.log(output);
