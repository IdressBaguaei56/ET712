console.log(" Idress Baguaei ")
// Example 1
// collect the element 
// collect the button
let btnscrollby = document.querySelector(".btnscrollby")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(100,0)
})
/**
 * Example 2 
 */
// collect the elements 
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
    scrollgallery(600)
})

btnleft.addEventListener("click", function(){
    scrollgallery(-600)
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