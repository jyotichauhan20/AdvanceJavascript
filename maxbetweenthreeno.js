const readline=require('readline-sync')
const num1 = readline.questionInt("Enter first number: ");
const num2 = readline.questionInt("Enter second number: ");
const num3 =readline. questionInt("Enter third number: ");
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);