const module1 = require('./stringcase')

const readLine=require('readline-sync')
let foodMenu=readLine.question("Enter Your Food Menu Here...")

let input1=module1.Lower(foodMenu)

switch(input1){
    case "rajma":
        console.log(foodMenu,"yes")
        break;
    case "daal":
        console.log("daal")
        break;
    default:
        console.log("invalid foof input")
}