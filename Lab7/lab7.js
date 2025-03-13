console.log(" Idress Baguaei ")
console.log(" \n ------ Example 1: loop thorugh wach elemeny in a node list")
// Select element by class name " description "
let desc = document.querySelector(".description")
console.log(desc)
// Selecting element by id name, "title"
let titlenode = document.querySelector("#title") // # for id 
console.log(titlenode)
// Select element/s by tag name,"p"
let par = document.querySelectorAll("p")
console.log(par)
// select all elements with class name "methods"
let methods = document.querySelectorAll(".methods") // . for class
console.log(methods)
// loop through each element in a node list 
console.log(" \n ------ Example 2: loop thorugh wach elemeny in a node list")
for(let n = 0; n<methods.length; n++){
    console.log(methods[n])
}

console.log(" \n ------ Example 3: CLICK EVENT ------")
// Select the button 
let btn = document.querySelector(".btnclick")
// add an event (click) to btn 
btn.addEventListener("click", function(){
    alert("BTN WAS CLICKED")
})

console.log(" \n ------ Example 4: click event to change text content  ------")
// selecting the elements, 'btnmsg' and 'msg'
let btnmsg = document.querySelector(".btnmsg")
let msg = document.querySelector(".msg")
// add an event to the 'msg', that change the text node to " Full name " 
btnmsg.addEventListener("click", function(){
    msg.innerHTML = " Good Morning <b> Idress Baguaei </b>"
})

console.log(" \n ------ Example 5: changing shapes mini - app  ------")
// select elements 
let shape = document.querySelector(".shape")
let btncircle = document.querySelector(".btncircle")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")

// add an event to each button 
btncircle.addEventListener("click", function(){
    shape.className = "circle"
})
btnsquare.addEventListener("click", function(){
    shape.className = "square"
})
btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle"
})

/**
 * Tuesday, March 11, events 
 */
// Example 6 
//onmouseout event 
// collect the element 
let event6 = document.querySelector(".event6")
// add a mouseout event to open an alert dialog box 
event6.onmouseout = function(){
    alert(" MOUSE OUT - Example 6")
}

// Example 7
// inline event 
function openalert(){
    alert(" CLICK EVENT - EXAMPLE 7 ")
}

// example 8 mouseover event 
// change the background color of a div when the mouse hover the element 
// collect element 
let divexample8 = document.querySelector(".divexample8")
divexample8.onmouseout = function(){
    let randred = Math.floor(Math.random()*255)
    let randgreen = Math.floor(Math.random()*255)
    let randblue = Math.floor(Math.random()*255)
    divexample8.style.backgroundColor = `rgb(${randred},${randgreen},${randblue})`
}

// Example 9: Keyboard 
// collect elements
let inputext9 = document.querySelector(".inputext9")
let ex9paragraph = document.querySelector(".ex9paragraph")

inputext9.onkeydown = function(event){
    ex9paragraph.innerHTML = `key ${event.key} was pressed`
}

/**
 * LAB EXCERCISE
 */
// EXERCISE
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
let ps1 = document.querySelector(".ps1");

// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
ps1.addEventListener("mouseout", function() {
    ps1.innerHTML = "Idress Baguaei";
});

// search for the second p with class ps2
let ps2 = document.querySelector(".ps2");

// add a click event to the ps2 to change the font-size to 25px and color to olive when clicked
ps2.addEventListener("click", function() {
    ps2.style.color = "olive";
    ps2.style.fontSize = "25px";
});

// search for the first div with class divs2
let divs2 = document.querySelector(".divs2");

// add a click event to change the background color to indigo
divs2.addEventListener("click", function() {
    divs2.style.backgroundColor = "indigo";
});

// search for the second div with class divs3
let divs3 = document.querySelector(".divs3");

// add a keydown event to change the width of divs3 to 300px
divs3.setAttribute("tabindex", "0");
divs3.addEventListener("keydown", function(event) {
    divs3.style.width = "300px";
});
