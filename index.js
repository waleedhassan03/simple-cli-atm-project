#! /usr/bin/env node
// shabang
import inquirer from "inquirer";
let myBalance = 50000; // Dollars
let myPin = 1111;
// print welcome message
console.log("Welcome to Waleed Hassan's ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Code:",
        type: "number"
    }
]);
if (pinAnswer.pin == myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select From Options",
            type: "list",
            choices: ["withdraw", "fast cash", "balance inquiry"]
        }
    ]);
    if (operationAns.operation == "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance!!!");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`You have withdrwan ${amountAns.amount} successfully`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation == "balance inquiry") {
        console.log(`Your current balance is: ${myBalance} `);
    }
    if (operationAns.operation == "fast cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Plese Select Fast Cash Amount",
                type: "list",
                choices: ["1000", "2000", "3000", "5000", "10000"]
            }
        ]);
        if (fastCashAnswer.amount) {
            myBalance -= fastCashAnswer.amount;
            console.log(`fast cash of ${fastCashAnswer.amount} withdrawn`);
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect Pin Code!!!");
}
console.log("Thank you for using our service");
// Assignment
// 1) add fast cash option ... (in whiuch four options will appear 1k ,2k , 5k, 10k means you dont need to enter amount)  (done)
// 2) use template literals     ( done)
//  3) if withdraw amount exceeds our currect balance than a message will appear as insufficient balacne (done)
