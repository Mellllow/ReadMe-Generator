// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Why did you build this?",
        name: "description",
    },
    {
        type: "input",
        message: "How do you install?",
        name: "install",
    },
    {
        type: "list",
        message: "choose a license",
        name: "license", 
        choices: [1,2,3]
    },
    {
        type: "input",
        message: "Who are the contributers?",
        name: "contributors",
    },
    {
        type: "input",
        message: "A link to test it",
        name: "test",
    },
    {
        type: "input",
        message: "Your github or repo",
        name: "github",
    },
    {
        type: "input",
        message: "Your github or repo",
        name: "email",
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=> {
        console.log(answers);
    })
    
}

// Function call to initialize app
init();
 