#! /usr/bin/env node 
import inquirer from "inquirer";
let roundnumber = Math.floor((Math.random() * 4) + 1);
let userInput = await inquirer.prompt({
    type: "number",
    name: "userGuess",
    message: "Enter your guess (1-4)"
});
if (userInput.userGuess === roundnumber) {
    console.log("Congratulations! you guess correctly");
}
else {
    console.log(`Try Again,the correct answer is:${roundnumber}`);
}
