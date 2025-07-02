function calculateCartPrice(...num1){ // in case of val1, val2, ...num1 
     // 1st 2 value will go in two var and
    //rest will be in num1 as array 
    return num1 
}

console.log(calculateCartPrice(100, 300,700))


const user = { 
    name: "saurav",
    age: 21
}

function handleObject(anyObject){
    console.log(`user is ${anyObject.name} and age id ${anyObject.age}`)
}

handleObject(user)