const readline=require('readline-sync')
var num1=readline.questionInt("enter a number..")
var num2=readline.questionInt("enter a number..")

console.log('Enter your operand here...'+num1+" "+num2)
var symbles=readline.question("enter your operator here..(+, -, *, /):")

switch(symbles){
    case "+":
        console.log(num1,"and",num2,"=",num1+num2,"addition")
        break;
    case "-":
        console.log(num1,"and",num2,"=",num1-num2,"substraction")
        break;
    case "*":
        console.log(num1,"and",num2,"=",num1*num1,"multiplication")
        break;
    case "/":
        console.log(num1,"and",num2,"=",num1/num2,"division")
        break;
    default:
        console.log('invalid input')
}

