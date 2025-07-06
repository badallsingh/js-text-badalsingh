// primitive datatypes : always cll by value 
// meanly 7 types : string , boolean,integer(int),number, null, undifine, simbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol ('123')

console. log (id === anotherId);
const bigNumber = 3456543576654356754n

// Reference (Non primitive) datatypes 
//  meanly 3 types: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // array

let myObj = { // object 
name: "hitesh",
 age: 20,
}

const myFunction = function (){ // fuction
console. log ("Hello world");
} 


// ++++++++++++++++++++ memory +++++++++++++++++++++++

// basically two types : stack (premitive) ,heap(non- premitive)

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console. log (myYoutubename); 
console. log (anothername);

let userOne = {
email: "user@google.com",
upi: "user@ybl"
}
let userTwo = userOne
userTwo. email = "hitesh@google.com"
console. log (userOne.email); console. log (userTwo.email);