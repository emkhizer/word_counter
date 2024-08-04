#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the word:",
    },
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);