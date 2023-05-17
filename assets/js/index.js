// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateData = require('./writeDown');
const fs = require('fs');
console.log(inquirer)


// TODO: Create an array of questions for user input
// 

    const questions = [
    {
        type: 'input',
        message: "What is the name of your project?",
        name: "name"
    },
    {
        type: 'input',
        message: "What is your email?",
        name: "email"
    },
    {
        type: 'input',
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: 'input',
        message: 'Describe your project',
        name : "description"
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: "installation"
    },
    {
        type: 'input',
        message: 'How do you use your project?',
        name: "usage"
    },
    {
        type: 'input',
        message: 'How was your project tested?',
        name: "tested"
    },
    {
        type: 'input',
        message: 'How can someone contribute?',
        name: "contribute"
    },
    {
        type: 'list',
        message: "What license is used?",
        name: "license",
        choices: [
            {
                name:"MIT License",
                value: "MIT"
            },
            {
                name: "Apache License 2.0",
                value: "Apache"
            },
            {
                name: "GNU General Public License v3.0",
                value: "GNU"
            }
        ]
    }
]

 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
)}

// TODO: Create a function to initialize app
function init(){
    inquirer
    .prompt(questions)
    .then((response)=> {
        const file = generateData(response)
        const fileName = "readme.md"
        writeToFile(fileName, file)
    } )
    

}

// Function call to initialize app

init();