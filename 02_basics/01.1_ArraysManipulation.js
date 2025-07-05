// ===============================================
// 🔥 Deep Dive: filter(), map(), reduce() in JavaScript
// ===============================================

const users = [
  { name: "Saurav", age: 23, score: 95 },
  { name: "Ankit", age: 19, score: 85 },
  { name: "Sana", age: 28, score: 78 },
  { name: "Riya", age: 17, score: 88 },
  { name: "Kabir", age: 25, score: 92 }
];

// --------------------------------------------------
// ✅ .filter() 🧹
// Filters items based on a condition and returns a new array
// It does NOT change the original array
// Used for selecting specific items from an array
// Example: Filter users who are adults (age >= 18)
const adults = users.filter(user => user.age >= 18);
// Returns: [{Saurav}, {Ankit}, {Sana}, {Kabir}]
// Riya is excluded because her age is 17

// --------------------------------------------------
// ✅ .map() 🧭
// Transforms each item and returns a new array of the same length
// Often used to extract properties or modify structure
// Example: Get just the names of users
const names = users.map(user => user.name);
// Returns: ["Saurav", "Ankit", "Sana", "Riya", "Kabir"]

// Example: Add bonus points to everyone's score
const boostedScores = users.map(user => ({
  ...user,                 // spread original user properties
  score: user.score + 5    // add 5 bonus points to score
}));
// Returns a new array where everyone's score is increased by 5

// --------------------------------------------------
// ✅ .reduce() 🧪
// Combines all items in the array into a single value
// You provide a "reducer" function and a starting value (accumulator)
// Useful for calculating totals, averages, or building objects
// Example: Calculate total score of all users
const totalScore = users.reduce((acc, user) => acc + user.score, 0);
// Starts with acc = 0
// Then adds each user's score: 95 + 85 + 78 + 88 + 92 = 438

// Example: Create an object with name as key and score as value
const scoreMap = users.reduce((acc, user) => {
  acc[user.name] = user.score;
  return acc;
}, {});
// Returns: { Saurav: 95, Ankit: 85, Sana: 78, Riya: 88, Kabir: 92 }

// --------------------------------------------------
// Summary:
// filter()  → Keep only items that match a condition ✅
// map()     → Transform each item in the array 🔄
// reduce()  → Boil the array down to a single result (number, object, etc.) 🧯
