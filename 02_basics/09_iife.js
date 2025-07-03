// Immediately Invoked Function Expression (IIFE)

// function one(){
//     console.log('DB CONNECTED');
    
// }
// one()



(function one(){
    //named EEFI
    console.log('DB CONNECTED');
    
})();                    //IIFE
                        //immediately executed
                        //it prevents global scope's pollution 

  (() => 
    {
          console.log('DB CONNECTED TWO');
    })()                      



