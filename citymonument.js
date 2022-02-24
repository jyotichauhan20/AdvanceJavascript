
const module1 = require('./stringcase')
const readLine=require('readline-sync')
let City=readLine.question("Enter your city here..")
let input1=module1.Lower(City)

switch(input1){
    case 'delhi':
        console.log("red fort")
        break;
    
    case 'agra':
        console.log("taj mahal")
        break;
    case 'jaypur':
    
        console.log("jay mahal")
        break;
    default:
        console.log("invalid city name!")
}
