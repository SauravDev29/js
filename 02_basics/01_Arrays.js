// array

const arr = [1, 2, 3];                   // literal
const arr2 = new Array(5);              // length = 5, all empty
const arr3 = Array.of(10, 20, 30);      // [10, 20, 30]

const arr1 = [1, 2, 3];                        // Sample array for all examples

//   .concat() used to add arrays
// Returns a new array by joining two or more arrays (or values). Does not mutate original.
const a = [1, 2];
const b = [3, 4];
const result = a.concat(b);           // [1, 2, 3, 4]
console.log(arr[1]);                          // Access → 2 (element at index 1)

//You can also mix values:
const r = a.concat(99, b);            // [1, 2, 99, 3, 4]

//Spread

const a1 = [1, 2];
const b2 = [3, 4];
const combined = [...a, ...b];       // [1, 2, 3, 4]

//from 

console.log(Array.from("saurav"));

//of

const x = 3
const y = 4
const z = 6
console.log(Array.of(x,y,z));

arr.push(4);                                  // Push → adds 4 to end → [1,2,3,4]

arr.pop();                                    // Pop → removes last → [1,2,3]

arr.unshift(0);                               // Unshift → adds 0 at start → [0,1,2,3]

arr.shift();                                  // Shift → removes first → [1,2,3]

console.log(arr.slice(1, 3));                 // Slice → [2,3] (non-destructive)

arr.splice(1, 1);                              // Splice → removes 1 element at index 1 → [1,3]

console.log(arr.indexOf(3));                  // IndexOf → 1 (index of value 3)

console.log(arr.includes(3));                 // Includes → true (3 is present)

arr.sort();                                   // Sort → sorts in-place (lexicographically if strings)

arr.reverse();                                // Reverse → reverses in-place

arr.forEach(x => console.log(x));             // ForEach → logs each element

const doubled = arr.map(x => x * 2);          // Map → returns new array [2,6]

const filtered = arr.filter(x => x > 1);      // Filter → returns new array [3]

const sum = arr.reduce((a, b) => a + b);      // Reduce → aggregates to single value (sum = 4)

console.log(arr.length);                      // Length → 2 (number of elements in arr)



//Shallow Copy	Copies top-level references only	
//Deep Copy	Recursively copies all nested levels
