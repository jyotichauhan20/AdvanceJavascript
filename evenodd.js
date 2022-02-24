var num=require("readline-sync")
var num2=num.questionInt("number==")
var i=0;
while(i<=num2){
    if(i%2===0){
        console.log("yes")
    }
    else{
        console.log("no")
    }
    i++;
}