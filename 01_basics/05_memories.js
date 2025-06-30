 //            MEMORY

 // Primitive ->  Stack 
 // Non-Primitive -> Heap 

//  Stack:
// Used for storing primitive data types
// Fast, small, stores actual values

// Heap:
// Used for storing non-primitive data types like objects and arrays
// Larger, stores the actual data
// Stack holds the reference (address) pointing to data in the heap


                      // Pass by Value (Primitives)
// Data types: number, string, boolean, undefined, null, symbol, bigint
// When you assign a primitive, JavaScript stores the actual value in the stack.
// When you copy it to another variable, a new copy of that value is made.
// Changing the new variable does not affect the original.

let a = 10;   
let b = a;    

b = 20;

console.log(a); // 10
console.log(b); // 20

// Memory View:
// a is stored in the stack as 10
// b is also in the stack as a separate 10
// Changing b does not touch a


                 // Pass by Reference (Non-Primitives)
// Data types: object, array, function
// The actual object is stored in the heap
// The stack holds a reference (pointer) to the heap location
// When you assign an object to another variable, the reference (not the object) is copied
// Changes via one variable affect the same object in memory

let obj1 = { name: "Saurav" };  
let obj2 = obj1;

obj2.name = "Kumar";

console.log(obj1.name); // Kumar

// Memory View:
// obj1 and obj2 both point to the same heap memory
// Updating through one updates for both

obj2 = { name: "Rahul" };

console.log(obj1.name); // Kumar
console.log(obj2.name); // Rahul
//Now obj2 points to a new object. The original object remains unchanged via obj1



