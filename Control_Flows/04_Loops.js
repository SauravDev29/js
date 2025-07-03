// ✅ 1. FOR LOOP – Runs a fixed number of times
for (let i = 0; i < 5; i++) {
  // Runs from i = 0 to 4
  // Best when you know how many times to loop
  // Use case: paginate 10 users, loop through 0–9
  console.log("For Loop Count:", i);
}



// ✅ 2. WHILE LOOP – Runs as long as condition is true
let j = 0;
while (j < 3) {
  // Executes while j is less than 3
  // Use case: polling server until response received
  console.log("While Loop Count:", j);
  j++;
}



// ✅ 3. DO...WHILE LOOP – Runs at least once, then checks condition
let k = 5;
do {
  // Will run once even though k > 3
  // Use case: retry at least once before checking retry limit
  console.log("Do-While Loop Count:", k);
  k++;
} while (k < 3);



// ✅ 4. FOR...OF LOOP – Used for arrays, strings, iterables
let fruits = ["apple", "banana", "cherry"];
for (let name of fruits) {
  // Grabs each value directly
  // Use case: iterate over API response array of items
  console.log("For...of Fruit:", name);
}



// ✅ 5. FOR...IN LOOP – Used for objects, gives keys
let user = { name: "Saurav", age: 22 };
for (let key in user) {
  // Access keys and values in object
  // Use case: loop over config object or user profile fields
  console.log("For...in Key:", key, "Value:", user[key]);
}



// ✅ LOOP CONTROL: break – Exit loop early
for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // Exit when i == 3
  // Use case: stop checking after first match found
  console.log("Break Example:", i);
}



// ✅ LOOP CONTROL: continue – Skip current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Skip when i == 3
  // Use case: skip blacklisted user ID
  console.log("Continue Example:", i);
}



// ✅NESTED LOOPS – Loop inside another loop
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    // Use case: generating a 2D matrix, matching each user to each role
    console.log("Nested Loop: i =", i, "j =", j);
  }
}



// ✅6. Array.forEach() – Callback for each item (not breakable)
let nums = [1, 2, 3];
nums.forEach(function (n) {
  // cannot return // undefined
  // Cannot use break or continue here
  // Use case: run a side-effect (like logging) on each array item
  console.log("forEach Number:", n);
});



// ✅  Array.map() – Transforms array (returns new array)
    let num = [1, 2, 3];
let doubled = num.map(function (n) {
  // Use case: double prices, format response, attach new keys
  return n * 2;
});
console.log("Mapped Array:", doubled); // [2, 4, 6]



// ✅ Array.filter() – Keeps items that match condition
let evens = nums.filter(function (n) {
  // Use case: filter valid users, non-empty fields, etc.
  return n % 2 === 0;
});
console.log("Filtered Array (evens):", evens); // [2]



// ✅ 12. for await...of – Loop over async iterables (advanced)
async function asyncLoop() {
  const data = [Promise.resolve(1), Promise.resolve(2)];

  for await (let val of data) {
    // Use case: fetch async data sequentially
    // Useful when hitting APIs or databases with rate limits
    console.log("Async For...of:", val);
  }
}
asyncLoop();
