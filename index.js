#! /usr/bin/env node
// making a simple calculator 
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: 'Enter the First Number : ', name: 'firstNumber', type: 'number',
    }, //taking first input from user
    { message: 'Enter the Second Number : ', name: 'secondNumber', type: 'number' }, //taking second input from user
    {
        message: 'Select the operators you want to choose', //asking about choosing the operators
        type: 'list',
        name: 'operators',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'], //we make a list of choices for user to select
    }]);
// conditional statements
if (answer.operators === "Addition") { //conditional statement for addition operater which adds two values
    let sum = (answer.firstNumber + answer.secondNumber);
    console.log("The Addition of these numbers is = ", sum);
}
else if (answer.operators === "Subtraction") { //conditional statement for subtraction operater which substract two values
    let subtraction = (answer.firstNumber - answer.secondNumber);
    console.log("The Subtraction of these numbers is = ", subtraction);
}
else if (answer.operators === "Multiplication") { //conditional statement for multiplication operater which multiply two values
    let multiplication = (answer.firstNumber * answer.secondNumber);
    console.log("The Multiplication of these numbers is = ", multiplication);
}
else if (answer.operators === "Division") { //conditional statement for division operater which divide two values
    let division = (answer.firstNumber / answer.secondNumber);
    console.log("The ivision of these numbers is = ", division);
}
else {
    console.log("invalid operator"); // if user is not giving any of the operator then it will show 
}
