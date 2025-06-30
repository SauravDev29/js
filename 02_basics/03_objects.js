
const regualrUser ={
    email: " some@gamil.com",
    fullname: {
        userfullname: {
            firstname : "saurav",
            lastname : "choudhary"

        }
    }
}
// console.log(regualrUser);
// console.log(regualrUser.fullname);
// console.log(regualrUser.fullname.userfullname);
// console.log(regualrUser.fullname.userfullname.lastname);

const obj1 = {  1:"a",  2: "b" }

const obj2 = {  3:"a",  4: "b" }

const obj3 = {obj1, obj2}
//console.log(obj3);
const obj4 = Object.assign(obj1, obj2)
//console.log(obj4);
const obj5 = Object.assign({}, obj1, obj2)

const obj6 = { ...obj1, ...obj2}

//multiple object in array

const users = [
  { name: "Saurav", age: 21 },
  { name: "Aman", age: 25 },
  { name: "Neha", age: 20 }
];

console.log(users[0].name);   // "Saurav"
console.log(users[1].age);    // 25

console.log(Object.keys(regualrUser));
console.log(Object.values(regualrUser));

console.log(regualrUser.marks('age')); // return if present in boolean
