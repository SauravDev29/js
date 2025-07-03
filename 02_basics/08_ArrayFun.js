const user = {
    username: "saurav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);  // to call inside a scope
        // scope is preventing hardcodig by refering to variable inside scope 
        // .....so if variable value is changed then the reference value of this. will also change
        console.log(this);
         
    }
}
user.welcomeMessage()
user.username = "sam" // here value is being changed
user.welcomeMessage()

//Global object inside brower is WINDOW OBJECT


// function one(){
//     let username = "saurav"
//     console.log(this);   
// }
// one()


// const one = function(){
//     let username = "saurav"
//     console.log(this.username);  
// }
// one()


// const one = () => {
//     let username = "saurav"
//     console.log(this);    
// }
// one()

                         // Arrow Function
                         
                         
                        // const addTwo = (num1, num2) => {
                        //     return num1+num2
                        // }
                        // console.log(addTwo(4,7))

                          
                        
                        // const addTwo = (num1, num2) =>  num1+num2
                        // console.log(addTwo(4,7))

                        // const addTwo = (num1, num2) =>  (num1+num2)
                        // console.log(addTwo(4,7))

                        const addTwo = (num1, num2) => ({urname:"saurav"})
                        console.log(addTwo(3,5));
                        

                         
