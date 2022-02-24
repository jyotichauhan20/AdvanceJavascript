console.log("Wel Come to Bank World!")
const readLine=require("readline-sync")

var correct_pin = 1234
var pin=3;
var currentBalance = 35000;
username = readLine.question("Enter your name....");

function InsertAtmCard(){
    console.log("swipe your card here !")
	var selectlanguage=readLine.questionInt("select your language here.... \n 1. Hindi== \n 2. English== \n 3. Telugu== \n 4. Kannada== \n")
	if (selectlanguage===1 || selectlanguage===2 || selectlanguage===3 || selectlanguage===4){
		selectAccountType();
	}
	else{
		console.log("U have to choose a language...")
	}
}

function Name() {
    if (username !== "" && username !== null) {
		checkPin();
	}else {
		console.log("Please enter your name...Thanks")
	}
}

function checkPin() {
	var passwordEntry = readLine.questionInt("Dear " + username + ", enter your 4 digit PIN..... \n");
    if (correct_pin===passwordEntry){
        selectTransection();
    
    }else {
        console.log("Incorrect PIN. Please try again.");
        console.log("You have " + pin + " chances to try");
        Name();
        
	}
}

function selectAccountType() {
    var accountType = readLine.questionInt("Which type of account do you have? \n 1. Savings \n 2. Current \n 3. Credit \n");
	if(accountType === 1 || accountType===2 || accountType===3){
		checkPin();
}
}

function selectTransection() {
	let atmFunctions = readLine.questionInt("Hello " +username + ", what can we do for you today? \n 1. Inquiry \n 2. Withdrawal \n 3. Deposit \n 4. Exit \n");
	if (atmFunctions !== "" && atmFunctions !== null && !isNaN(atmFunctions)) {
		switch (atmFunctions) {
			case 1:
				inquiry();
				break;
			case 2:
				withdrawal();
				break;
			case 3:
				deposit();
				break;
			case 4:
				exit();
				break;
			default:
				console.log("Please make a valid selection...");
		}
	} else {
		console.log("Please make a valid selection"+username);
		selectTransection();
	}
}

// Inquiry
function inquiry() {
	console.log("Your current balance is $" + currentBalance);
	toContinue();
}

// Deposit
function deposit() {
	var depositAmount = readLine.question("How much do you want to deposit?");
	if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
		currentBalance += depositAmount;
		console.log("You have successfully deposited $" + depositAmount + "\n" + "You now have $" + currentBalance);
		toContinue();
	} else {
		console.log("Error: please enter a number!");
		deposit();
	}
}
// Withdrawal
function withdrawal() {
	var withdrawalAmount = readLine.questionInt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $1000 \n");
	if (withdrawalAmount !== "" && withdrawalAmount !== null) {
		if (withdrawalAmount >= 1000) {
			if (withdrawalAmount <= currentBalance) {
				currentBalance =currentBalance - withdrawalAmount;
				console.log("Transaction successful!");
				console.log("Your remaining balance is $" + currentBalance);
				toContinue();
			} else {
				console.log("You do not have sufficient funds!");
				withdrawal();
			}
		} else {
			console.log("You must withdraw at least $1000");
			withdrawal();
		}
	} else {
		console.log("Error: please enter a number!");
		withdrawal();
	}
}	

function toContinue(){
    var yesOrNo = readLine.question("Do you want to perform another transaction? \n 1. Yes \n 2. No \n");
	if (yesOrNo !== "" && yesOrNo !== null) {
    	if (yesOrNo === 2){
			exit();
    	}
		else {
			InsertAtmCard(); 
    	}
	}else {
		console.log("Please make a valid selection");
		toContinue();
	}
}

// Exit the ATM
function exit(){
	console.log('Thank You For Using ATM......')
}

InsertAtmCard()
