"use strict";

// 🔄 NULLISH COALESCING OPERATOR (??)

/*
✅ Syntax: value1 ?? value2
- Returns value1 if it's NOT null or undefined
- Otherwise, returns value2
- Only checks for: null or undefined
*/

let userInput = null;
let name = userInput ?? "Guest";

console.log(name); // "Guest"

let score = 0;
let finalScore = score ?? 50;
console.log(finalScore); // 0 ✅ (0 is not null or undefined)

let email;
let userEmail = email ?? "no-email@domain.com";
console.log(userEmail); // "no-email@domain.com"

////////////////////////////////////
// ⚔️ VS Logical OR (||) Operator //
////////////////////////////////////

/*
|| treats all falsy values as fallback triggers:
- 0, "", false, NaN, null, undefined → all get skipped
?? only skips null and undefined
*/

let input = 0;
console.log(input || 100);  // 100 ❌ (0 is falsy)
console.log(input ?? 100);  // 0 ✅ (not null/undefined)

/////////////////////////////////
// 🪄 TERNARY (CONDITIONAL) OP //
/////////////////////////////////

/*
✅ Syntax:
condition ? valueIfTrue : valueIfFalse
- Shorthand for if-else
- Best for simple logic
*/

let age = 20;

let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Nesting example (be careful with readability)
let accessLevel = age >= 18 ? (age >= 60 ? "Senior" : "Adult") : "Minor";
console.log(accessLevel); // "Adult"
