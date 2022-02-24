const readLine=require('readline-sync')

const module1 = require('./stringcase')
let months=readLine.question("enter a months  here...")

let input1=module1.Lower(months)
switch(input1){
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log("31 days")
        break;
    case 'aprile':
    case 'june':
    case 'september':
    case 'november':
        console.log("30 days")
        break;
    case 'february':
        console.log("28 days")
        break;
    default:
        console.log("invalid monthe and date")
    
}

