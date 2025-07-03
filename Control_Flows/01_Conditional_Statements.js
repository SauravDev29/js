"use strict";

// 🧠 CONTROL FLOW IN JS
// if, else if, else
// Comparison operators: ===, !==, ==, !=, <=, >=, <, >

let age = 20;

if (age >= 18) {
  console.log("Adult");       // ✅ Runs if age is 18 or more
} else if (age >= 13) {
  console.log("Teenager");    // ✅ Runs if age is 13–17
} else {
  console.log("Child");       // ✅ Runs if age is below 13
}

// ✅ Use if/else for range-based logic or unique conditions

////////////////////////////////////////////////////////////

// 🔁 switch-case (cleaner than many if-else blocks for matching exact values)

let role = "adm01";

switch (role) {
  case "admin":
    console.log("Full Access");   
    break;  // ⛔ Prevents fall-through — stops here if matched

  case "user":
    console.log("Limited Access");
    break;

  default:
    console.log("No Access");  // ✅ Runs if no case matches
}

// ⚠️ Without `break`, switch will "fall through" all remaining cases
// Switch is best for checking exact matches — not ranges

/*
🧠 QUICK TIP:

if (score === 100) → check for value + type (strict)
if (score == "100") → allows coercion (not recommended)
if (score !== 0) → checks not equal and strict
*/

