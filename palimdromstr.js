const n=require("readline-sync");
var name=n.question("enter name: ")
const store=name;
var string=""
// for (let i=name.length-1;i>=0;i--) {
//    string=string+name[i]
// }
var i=name.length-1
while(i>=0){
   string=string+name[i]
   i-=1
}
if (store===string) {
   console.log("its palindrome string")
}
else {
   console.log("it's not a palindrome string")
}