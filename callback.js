 
const callbackWaalaFunction = (fn) => {
    // Calls the function with any required arguments
   
    return fn("kumar", 24, "chocolates")
  }
  
const myDescription = (arg1, arg2, arg3) => {
 
    return "My name is "+arg1+" and I am "+arg2+" years old"+". I like "+arg3
  }
  // Passing a callback into a callback accepting function
const result = callbackWaalaFunction(myDescription)
console.log(result) // My name is kumar and I am 24 years old. I like chocolates




  