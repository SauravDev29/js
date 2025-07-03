"use strict";

// 🕰️ DATE BASICS in JavaScript

// 🔹 Reference Point: January 1, 1970 (Unix Epoch time)

// Create a new date object with current date & time
let myDate = new Date();

// 🧾 Full string format (includes time zone info)
console.log(myDate.toString());       
// Example: "Wed Jul 03 2025 15:26:47 GMT+0530 (India Standard Time)"

// 📅 Date only in readable form
console.log(myDate.toDateString());   
// Example: "Wed Jul 03 2025"

// 🌍 Locale-specific readable format
console.log(myDate.toLocaleString()); 
// Example: "03/07/2025, 3:26:47 pm"


