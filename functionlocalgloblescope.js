var myName="kumar"; // global scope
 
function sayHi(){
  console.log(myName); //output kumar
  var frdsName="Pavan";   // local scope or function scope
  console.log(frdsName); //output pavan
}
 
sayHi();
console.log(myName); //output kumar
console.log(frdsName); //output Error: ReferenceError: frdsName is not defined

//output
kumar
pavan
kumar
//ReferenceError: frdsName is not defined
