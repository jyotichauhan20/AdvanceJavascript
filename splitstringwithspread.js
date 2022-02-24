// Without a spread operator
var myName="kumar"
var array1=myName.split("")
console.log(array1) // output: [ 'k', 'u', 'm', 'a', 'r' ]
 
// With a spread operator
var myName="kumar"
var lettersOfMyName=[...myName]
console.log(lettersOfMyName); // output: [ 'k', 'u', 'm', 'a', 'r' ]
