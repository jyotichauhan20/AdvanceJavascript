var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var subStr = "over";
 
var c = mainStr.split(" ");
// console.log(c)
output="";
for(var i of c){
   output=output+i+" "
}
console.log(output);


