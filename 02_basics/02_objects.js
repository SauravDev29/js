// singleton -> A Singleton is an object that is created only once, 
// and shared across your entire application
 

//A non-singleton object is created fresh every time, with separate memory, and no global identity.

// Object creation using constructor: -> NON-SINGLETON
const tinderUser = new Object();    //  Valid but rarely used in modern JS 

// Object literal — the standard, clean way: NON-SINGLETON
const tinderuser = {};                //  Best practice
 
const u1 = new Object();
const u2 = new Object();
console.log(u1 === u2);  // false

const u3 = {};
const u4 = {};
console.log(u3 === u4);  // false

// Now the core object using a Symbol key
const uid = Symbol('userId');         //  Unique hidden key

const JsUser = {
    name: "Saurav",                   //  String key
    age: "21",                        //  String key
    [uid]: 12345,                     // Symbol key (brackets required)
    email: "developer.sauravkumar@gmail.com"  //  String key
};
console.log(JsUser.email);      // Saurav
console.log(JsUser["email"]);   // developer.sauravkumar@gmail.com
console.log(JsUser[uid]);       // 12345  must use the same symbol reference


 JsUser.email = "saurav@google.com" //override previoius value

 Object.freeze(JsUser) // Prevents adding, deleting, or modifying properties
// though i wont through error if tried to change after freeze

JsUser.greeting = function() 
{  
    console.log("hello everyone")
}
console.log(JsUser.greeting);
console.log(JsUser);

