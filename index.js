#! /usr/bin/env node
import inquirer from "inquirer";
// asking questions from users through inquirer //
let answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstnumber" },
    { message: "enter your second number", type: "number", name: "secondnumber" },
    {
        message: "select one opertor to perform operation",
        type: "list",
        name: "operators",
        choices: ["addition", "substraction", "multiplication", "division"],
    }
]);
// if and else conditions //
if (answer.operators === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators == "substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators == "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operators == "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("invalid input");
}
