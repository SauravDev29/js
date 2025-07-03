//global
let globalVar = "I am global";

function show() {
  console.log(globalVar); //  Accessible
}
show();
console.log(globalVar); //  Accessible


//local 

function greet() {
  let localVar = "I am local";
  console.log(localVar); //  Accessible inside
}
greet();
console.log(localVar); //  Error: localVar is not defined

//Nested Scope

function outer() {
  let a = 10;

  function inner() {
    console.log(a); // ✅ Accesses outer variable
  }

  inner(); // called immediately
}
outer();




//closure

//When a function is created inside another function, 
// it can "remember" variables from its outer function,
//  even after the outer function has finished running. This is called a closure.

function outer() {
  let a = 10;

  return function inner() {
    console.log(a); // still works
  };
}

const func = outer(); // outer is done now
func();               // inner STILL remembers 'a'



