/*
console.log(" ----- Example 1 : console messaging -----")
console.warn("This is a warning message")
console.warn("ERROR!")

console.log(" ----- Example 2 : Global object of JS -----")
setTimeout(() =>{
    console.log("Welcome to nodejs")
}, 3000)

let count = 0 

const timer = setInterval(()=>{
    count +=2
    console.log(`counting =${count} times`)
    if (count == 10){
        clearInterval(timer)
    } 
}, 2000)
*/
console.log(" ----- Example 3 : Modules -----")
const name = require("./mod")
console.log(name.helper("Peter"))
console.log(name.id(12345))
console.log(name.email("Peter@neverland.edu"))

console.log(" ----- Example 4 : Creating a server -----")
// import the http module 
const http = require("http")
const fs = require("fs") // file stream module

//create a server
const server = http.createServer((request, response)=>{
    // send the request
    response.writeHead(200,{'content-type':'text/html'})
    const readstream = fs.createReadStream(__dirname +'/index.html')

    //piping
    readstream.pipe(response)
})

// sever listening to port 3000
server.listen((3000), function(){
    console.log("Sever is running!")
})



