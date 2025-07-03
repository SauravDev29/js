"use strict";

// 🔥 BREAK
// ✅ Used to exit a loop (or switch) immediately

for (let i = 0; i < 10; i++) {
  if (i === 5) break;  // 🚫 exits loop at i = 5
  console.log("Break ->", i);
}

// Output: 0 1 2 3 4

// 🔁 Works in: for, while, do...while, switch

///////////////////////////////

// 🚀 CONTINUE
// ✅ Skips the current iteration & continues to the next loop cycle

for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // ⏭️ skip i = 2
  console.log("Continue ->", i);
}

// Output: 0 1 3 4

///////////////////////////////

// 🔙 RETURN
// ✅ Exits a function immediately and optionally returns a value

function greet(name) {
  if (!name) return "No name provided";  // ❌ exit early if no name
  return `Hello, ${name}`;
}

console.log(greet("Saurav"));       // Hello, Saurav
console.log(greet());               // No name provided

// 🚫 You cannot use `return` outside a function in strict mode

///////////////////////////////

// 💣 THROW
// ✅ Throws an error and halts current execution (unless caught)

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");  // ❌ boom
  return a / b;
}

try {
  console.log(divide(10, 2));      // 5
  console.log(divide(10, 0));      // ❌ throw triggers catch
} catch (error) {
  console.log("Error caught:", error.message);
}

// Output:
// 5
// Error caught: Division by zero
