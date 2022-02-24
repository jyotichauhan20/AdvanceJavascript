var i=1;
const n=require("readline-sync")
var num=n.questionInt("enter your number==")
do{
    if(i%2===0){
        console.log(i)
    }
    else{
        console.log("navgurukul")
    }
    i++;
}
while(i<=num)