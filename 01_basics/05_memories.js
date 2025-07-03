"use strict";

// 🧠 MEMORY IN JAVASCRIPT

// ✅ Primitive Types → stored in Stack
// ✅ Non-Primitive (Reference) Types → stored in Heap

/*
🗂️ Stack:
- Fast & limited
- Stores actual values (primitives)
- Passed by value

📦 Heap:
- Large memory
- Stores complex data like objects/arrays/functions
- Stack holds reference (address) to Heap
*/

//////////////////////
// 🔁 PASS BY VALUE //
//////////////////////

// Data Types: number, string, boolean, null, undefined, symbol, bigint

let a = 10;
let b = a;   // Value copied

b = 20;

console.log("a:", a); // 10 ❌ (not affected)
console.log("b:", b); // 20 ✅ (separate copy)

/*
[STACK]
a -> 10
b -> 10 (copy)
*/

////////////////////////////
// 🔁 PASS BY REFERENCE //
////////////////////////////

// Data Types: object, array, function

let obj1 = { name: "Saurav" };
let obj2 = obj1;  // Reference copied

obj2.name = "Kumar";

console.log("obj1.name:", obj1.name); // Kumar ✅
console.log("obj2.name:", obj2.name); // Kumar ✅

/*
[STACK]
obj1 -> address#101
obj2 -> address#101

[HEAP @101]
{ name: "Kumar" }
*/

// 🔄 Now reassign obj2 to a new object

obj2 = { name: "Rahul" };

console.log("obj1.name:", obj1.name); // Kumar ✅ (unchanged)
console.log("obj2.name:", obj2.name); // Rahul ✅ (new object)

/*
obj2 now points to a new heap location
*/

//////////////////////////
// 🔍 COMPARISON TRAPS //
//////////////////////////

console.log("2" > 1);        // ✅ true → "2" coerced to number
console.log(null > 0);       // ❌ false
console.log(null == 0);      // ❌ false
console.log(null >= 0);      // ✅ true → null becomes 0 in comparison

console.log(2 == "2");       // ✅ true (loose equality)
console.log(2 === "2");      // ❌ false (strict equality)

//////////////////////////////
// 🔄 TYPE CONVERSIONS //
//////////////////////////////

let score = "24and";
let valueInNumber = Number(score);

console.log(typeof score);           // string
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);         // NaN

// Other cases
console.log(Number("33"));     // 33 ✅
console.log(Number("33abc"));  // NaN ❌
console.log(Number(true));     // 1
console.log(Number(false));    // 0

// Boolean conversion
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);  // boolean
console.log(booleanIsLoggedIn);         // true ✅

console.log(Boolean(""));       // false ❌
console.log(Boolean("hello"));  // true ✅
console.log(Boolean(0));        // false ❌

// String conversion
let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);         // "33"
console.log(typeof stringNumber);  // string

////////////////////////////////
// ⚔️ TYPE COERCION & OPS //
////////////////////////////////

let value = 3;
let negValue = -value;

console.log(negValue);         // -3
console.log(typeof negValue);  // number

// Mixed type operations
console.log("1" + 32 + 3);  // "1323" → string dominates
console.log(1 + 2 + "3");   // "33"   → number first, then string

console.log("5" - 2);       // 3 → "5" coerced to number
console.log("5" * 2);       // 10
console.log("5" / 2);       // 2.5
console.log("5" % 2);       // 1
console.log("five" * 2);    // NaN ❌
