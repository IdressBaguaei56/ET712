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