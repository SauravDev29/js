"use strict";

// 🔄 TYPE CONVERSIONS in JavaScript

let score = "24and";

// 🔍 Type before conversion
console.log(typeof score); // 🧵 string

// 🔁 Convert to Number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // 🔢 number
console.log(valueInNumber);        // ❌ NaN (Not a Number – invalid numeric string)

// ⚠️ Some type conversion examples:
console.log(Number("33"));     // ✅ 33 (valid numeric string)
console.log(Number("33abc"));  // ❌ NaN (invalid mixed string)
console.log(Number(true));     // ✅ 1
console.log(Number(false));    // ✅ 0

// ✅ BOOLEAN Conversion
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // 🔁 boolean
console.log(booleanIsLoggedIn);        // ✅ true

// Truthy and Falsy 🔑
// ✅ 1 → true
// ❌ "" → false
// ✅ "saurav" → true
// ❌ 0 → false
// ❌ null, undefined, NaN → all treated as false

// 🔁 Convert to String
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);         // "33"
console.log(typeof stringNumber);  // 🧵 string

// ******************************************
// ⚔️ OPERATIONS in JavaScript
// ******************************************

let value = 3;
let negValue = -value;
console.log(negValue);             // -3
console.log(typeof negValue);      // 🔢 number

// 🔥 Type Coercion Examples

// 🧵 String + Number → String (concatenation)
console.log("1" + 32 + 3);  // "1323"
// Why? → Left to right: "1" + 32 = "132" → "132" + 3 = "1323"

// 🔢 Number + Number + String → String (at end)
console.log(1 + 2 + "3");   // "33"
// 1 + 2 = 3 → 3 + "3" = "33" (string wins if it's last)

// 🔍 Some more coercion examples:
console.log("5" - 2);       // 3   (JS converts "5" to number)
console.log("5" * 2);       // 10
console.log("5" / 2);       // 2.5
console.log("5" % 2);       // 1
console.log("five" * 2);    // NaN (invalid string)
