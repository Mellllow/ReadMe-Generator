// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "imput",
        message: "Title of your project?",
        name: "title",
    },
    {
        type: "imput",
        message: "Why did you build this?",
        name: "Why",
    },
    {
        type: "imput",
        message: "What problem does this program solve?",
        name: "problem",
    },
    {
        type: "imput",
        message: "What did you learn for this?",
        name: "learn",
    },
    {
        type: "imput",
        message: "How do you install?",
        name: "install",
    },
    {
        type: "imput",
        message: "what are the key features?",
        name: "features",
    },
    {
        type: "imput",
        message: "Who are the contributers?",
        name: "Contributers",
    },
    {
        type: "imput",
        message: "any 3rd party assets? any tutorials?",
        name: "thirdparty",
    },
    {
        type: "imput",
        message: "A link to test it",
        name: "link",
    },
    {
        type: "imput",
        message: "Your github or repo",
        name: "github",
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt()
}

// Function call to initialize app
init();
