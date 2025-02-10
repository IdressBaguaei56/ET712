/**
 * Idress Baguaei 
 * Feb 4, Loops 
 */
console.log(" Idress Baguaei ")
console.log("\n ------ Example 1: For Loops ------")
// use a for loop to print from 0 to 4  --> 0 1 2 3 4 
for( let n = 0; n<=4 ;n++ ){
    console.log(`counting = ${n}`)
}

console.log("\n ------ Example 2: For Loop with conditional statment ------")
// Collect the intial value from the user 
// Print all even numbers between the intial values and 20 
let intialvalue = parseInt(prompt(" Enter a number: "))
for(intialvalue; intialvalue<= 20; intialvalue++){
    if(intialvalue%2==0){
        console.log(intialvalue) // only print even numbers 
    }  
}

console.log("\n ------ Example 3: For Loop as decremente counter ------")
// for loop to print from 9 to 0 in a step of 3 --> 9 6 3 0 
for(let n = 9; n >=0; n-=3  ){
    console.log(n)
}

console.log("\n ------ Example 4: For Loop in an array(list) ------")
// set up a list of animals 
let animals = ["fish","turtle","dog"]
for(let index=0; index<animals.length; index++){
    console.log(animals[index])
}
// set up a list of number 
// Count how many negative numbers are in a list 
let numbers = [5, -3, 10, -9, 2]
let counternegative = 0
for(let index = 0; index<numbers.length ; index++){
    if(numbers[index]<0){
        counternegative++
    }
}
console.log(`There is ${counternegative} negtaive numbers in list "numbers"`)

console.log("\n ------ Example 5: For Loop in a string ------")
let username = "Peter Pan, neverland "
let counter_e =0;
for(let index =0; index<username.length; index++){
    //console.log(username[index])
    // Find the total number of letter 'e' in username 
    if(username[index]==="e"){
        counter_e++
    }
}
console.log(`There are ${counter_e} letter e in "username" `)

console.log("\n ------ Exercise For Loop ------")
let num =[-3,10,0,8,-9,5,-2,8,6,-1]
// Use for loop to check, all negative numbers and positive numbers and add all the negative and positive numbers 
let positivenum = 0;
let negativenum = 0;
for(let m = 0; m<num.length; m++){
    if(num[m]<0){
        negativenum += num[m]
    }
    else if (num[m]>0){
        positivenum += num[m]
    }
    
}
console.log(`Sum of all negative number is ${negativenum}`)
console.log(`Sum of all Positive number is ${positivenum}`)

console.log("\n ------ Example 6: While loop ------")
// Use a while loop to display number from 0 to 4 --> 0 1 2 3 4 
let y = 0;
while(y<=4){
    console.log(y)
    y++
}

console.log("\n ------ Example 7: While loop application ------")
// Using while loop t match if the user number matches the secret number 
const Secret = 8
// Collect a number from the user 
let usernumber = parseInt(prompt("Enter a number: "))
let guesscounter = 0
// run a while to recollect the user number if the number dosen't match the sceret number 
while(usernumber !== Secret){
    guesscounter++
    usernumber = parseInt(prompt("Wrong Guess! Enter another number: "))
}
console.log(`${usernumber} is right! Total attempts ${guesscounter}`)

console.log("\n ------ Example 8: Break in a While loop  ------")
// Create an app to summ all the even numbers. The app continuesly collect positive numbers until and stop if the negative numbers is entered 
let sumeven = 0;
while(true){
    let collectnumber = parseInt(prompt("Enter a positive number: "))
    if(collectnumber<0){
        break 
    }    
    else{
        if(collectnumber%2===0){
            sumeven += collectnumber //sumeven = sumeven + collectnumber
        }

    }
}
console.log(`Sum of all even numbers is ${sumeven}`)

console.log("\n ------ Example 9: Continue in a for loop   ------")
// print number from -5 to 5 , -5 -4 -3 -2 -1 0 1 2 3 4 5 
for(let n = -5; n<5; n++){
    if(n%2===0){
        continue
    }
    console.log(n)
}

console.log("\n ------ EXERECISE B  ------")

const Passcode = 1234;
let userattempt = parseInt(prompt("Please enter the Passcode: "));
let attempts = 3; 

while (userattempt !== Passcode) {
    attempts -= 1; // Fix the decrement syntax

    if (attempts === 0) {
        console.log("Account is locked");
        break; // Stop the loop immediately when attempts reach 0
    }

    userattempt = parseInt(prompt("Please enter the Passcode: "));
}

// Only print success message if account is NOT locked
if (userattempt === Passcode && attempts >= 0) {
    console.log("Your Pin number is correct");
}
