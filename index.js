function receivesAFunction(callback) {
    console.log(callback());
}

function returnsANamedFunction() {
    function namedFunction (){
        return "Hello named function!"; 
    }
    return namedFunction;
    

}
function returnsAnAnonymousFunction() {
    return function() {
      return "Hello anonymous function:";
    };
  }
  
// function returnsAnAnonymousFunction() {
//     function anonymousFunction (){
//         return "Hello anonymous function:"; 
//     }

//     return anonymousFunction;
    
// }

// const myFunction = returnsAnAnonymousFunction();
// console.log(myFunction());


// returnsANamedFunction(function () { return });

// function returnsANamedFunction() {
//     // Define a named function and return it
//     function namedFunction() {
//       // Function logic here
//       return "Hello, I am a named function!";
//     }
  
//     return namedFunction;
//   }
  
//   // Example usage:
//   const myFunction = returnsANamedFunction();
//   console.log(myFunction()); // This should print: "Hello, I am a named function!"
  