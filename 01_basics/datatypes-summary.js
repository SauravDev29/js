"use strict";

// 🧠 DATA TYPES IN JAVASCRIPT
// Based on how data is stored and retrieved in memory

// 📦 Two main categories:
// 1️⃣ Primitive (Call by Value)
// 2️⃣ Non-Primitive (Call by Reference)

////////////////////////////////////////////////////////
// ✅ PRIMITIVE TYPES (Immutable, Stored in Stack)   //
////////////////////////////////////////////////////////

/*
Primitive types:
- string
- number
- boolean
- null
- undefined
- symbol
- bigint
*/

// ➕ Numbers
const score = 100;
const scoreValue = 100.3;

// ✅ Boolean
const isLoggedIn = false;

// 🕳️ Null
const outsideTemp = null;  // typeof null → "object" (quirk of JS)

// ❓ Undefined
let userEmail;             // undefined

// 🏷️ Symbol — unique every time
const id = Symbol('123');
const anotherID = Symbol('123');

console.log(id === anotherID);               // false
console.log(Symbol('apple') === Symbol('apple')); // false
console.log(Symbol() === Symbol());          // false

// 🧮 BigInt — for numbers beyond 2^53 - 1
const bigNumber = 234233525352525226622n;

///////////////////////////////////////////////////////
// 🧱 NON-PRIMITIVE TYPES (Mutable, Stored in Heap) //
///////////////////////////////////////////////////////

/*
Non-Primitive types:
- array
- object
- function
*/

// 📚 Array
const heros = ["shaktiman", "naagraj", "doga"];

// 🧍‍♂️ Object
let myObj = {
    name: "hitesh",
    age: 22,
};

// ⚙️ Function
const myFunction = function () {
    console.log("Hello World");
};

///////////////////////////////////////////////////////
// ⚠️ Typeof Quirks — Be Aware                      //
///////////////////////////////////////////////////////

console.log(typeof score);         // "number"
console.log(typeof outsideTemp);   // "object" (JS bug)
console.log(typeof userEmail);     // "undefined"
console.log(typeof heros);         // "object"
console.log(typeof myFunction);    // "function" (fun fact: functions are special objects)

