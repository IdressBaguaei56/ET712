/*
HomeWork 1: Control flow and loops 
Students name: Idress Baguaei 
*/

console.log(" \n ------ Program 1: Conditional Statments ------ ")

let user = prompt("Please enter something");

if (user === null) {
    console.log("Null and void");
} 
else if (user === "") { // Trim spaces to avoid blank inputs with spaces
    console.log("Your answer is blank!");
} 
else {
    let num = parseInt(user); // Convert input to an integer

    if (!isNaN(num)) { // Check if the input is a valid number
        if (num > 0) {
            console.log("Think positively!");
        } 
        else if (num < 0) {
            console.log("Never have negative balance!");
        } 
        else {
            console.log("Yin and Yang!");
        }
    } 
    else {
        console.log("You entered a something new .");
    }
}

console.log(" \n ------ Program 2: For loop and nested conditional statment  ------ ")

let multipleOf3 = 0, multipleOf5 = 0, multipleOf7 = 0;

// Collect 10 numbers
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}:`));

    if (isNaN(num)) {
        console.log("Invalid input. Please enter a number.");
        i--; // Retry the current iteration
        continue;
    }

    if (num % 3 === 0) multipleOf3++;
    if (num % 5 === 0) multipleOf5++;
    if (num % 7 === 0) multipleOf7++;
}

// Display results
console.log(`${multipleOf3} numbers are multiple of 3`);
console.log(`${multipleOf5} numbers are multiple of 5`);
console.log(`${multipleOf7} numbers are multiple of 7`);
