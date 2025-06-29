 // # on the Basis of Storing and Retriving Data 
// there the two types of it :- (1) Primitive and (2) Non-Primitive

// Primitive /call  by Value

/*
7 Types : STRING , NUMBER , BOOLEAN ,NULL , UNDEFINED , SYMBOL, BigInt
*/

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTemp = null // datatype -> object
let userEmail ;  // let userEmail = undefined 

const id = Symbol('123')
const anotherID =Symbol('123') // despite having  same value they are different Because 
// Symbol() creates a new, unique value every single time it's called — regardless of its description.

Symbol('apple') !== Symbol('apple'); // true
Symbol() !== Symbol(); // true

const bigNumber = 234233525352525226622n //BigInt

// Non-Primitive /  call by Reference

/*
ARRAY, Objects , Functions 
*/

const heros =["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myfunction = function () {
    console.log("hello World")
}