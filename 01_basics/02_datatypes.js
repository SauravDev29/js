"use strict"; // 🔒 Use modern JavaScript (prevents sloppy mistakes)

// 📜 HISTORY
// 🧙‍♂️ 1995 – Brendan Eich at Netscape
// 🧪 Originally: Mocha → LiveScript → JavaScript (for Java's popularity boost)

// ⚙️ JS RUNTIMES (use V8 engine 🔂)
// 🟢 Node.js → open-source, built on V8, non-blocking I/O via event loop
// ⚡ Bun → modern runtime, fast, with bundler and transpiler
// 🔒 Deno → secure by default, supports TypeScript

// 🚀 V8 ENGINE:
// - Developed by Google (Chrome's engine)
// - Compiles JS to machine code 🧠
// - ⚡ Known for performance (was fastest when Node launched)

// 🔁 EVENT LOOP (in Node):
// - Handles async operations 🔄
// - Allows non-blocking behavior (no freezing UI or code) 🧘‍♂️
// - Core to Node’s scalability

// 📋 ECMAScript STANDARD:
// Managed by ECMA International ✨
// TC39 committee (Google, Microsoft, Mozilla, etc.) defines JS features

// ❌ alert(3 + 3) → browser only, won't work in Node.js

// 👤 Variable declarations:
let name = "Saurav";
let age = 21;
let isLoggedIn = false;

// 📦 DATA TYPES:
let score = 2 ** 53;          // 🔢 number – max safe integer
let big = 123456789012345678901234567890n; // 🔶 bigint
let text = "hello";           // 🧵 string
let loggedIn = true;          // ✅ boolean
let empty = null;             // 🕳️ null – intentional empty
let notAssigned;              // ❓ undefined – declared but not assigned
let uniqueId = Symbol("id");  // 🔖 symbol – always unique

// 🧱 object – collection of key-value pairs

// 🔍 Type Checks:
console.log(typeof "Saurav");  // 🧵 "string"
console.log(typeof null);      // ⚠️ "object" (JS quirk)
