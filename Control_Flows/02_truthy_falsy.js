"use strict";

// ⚖️ TRUTHY vs FALSY VALUES in JavaScript

/////////////////////
// ❌ FALSY VALUES //
/////////////////////

// These 7 values are treated as `false` in boolean context:

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(0n));        // false (BigInt zero)
console.log(Boolean(""));        // false (empty string)
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// 🔥 Only these 7 — everything else is TRUTHY

/////////////////////
// ✅ TRUTHY VALUES //
/////////////////////

console.log(Boolean("hello"));       // true → non-empty string
console.log(Boolean(" "));           // true → string with space
console.log(Boolean("0"));           // true → string "0"
console.log(Boolean([]));            // true → empty array
console.log(Boolean({}));            // true → empty object
console.log(Boolean(function(){}));  // true → empty function
console.log(Boolean(42));            // true → non-zero number
console.log(Boolean(-99));           // true → negative number

// ⚠️ Watch out for this common trap:

if ("0") {
  console.log("This runs"); // ✅ because "0" is a non-empty string → truthy
}

if ([]) {
  console.log("Empty array is truthy"); // ✅ also runs
}

if ({}) {
  console.log("Empty object is truthy"); // ✅ also runs
}

// Use Boolean() or !!value to force conversion when needed
