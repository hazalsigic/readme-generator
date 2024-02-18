const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide description for the project',
},
{
    type: 'input',
    name: 'installation',
    message: 'installation instructions?',
},
{
    type: 'input',
    name: 'usage',
    message: 'usage information?',
},
{
    type: 'list',
    name: 'license',
    message: 'Select the license',
    choices: [
    'Apache License',
    'GNU General Public License',
    'MIT License',
    'BSD 2-Clause',
    'BSD 3-Clause',
    'Boost',
    'Creative Commons Zero',
    'Eclipse',
    'Mozilla',
    ]
},
{
    type: 'input',
    name: 'contributing',
    message: 'Would you like to add contributors?',
},
{
    type: 'input',
    name: 'tests',
    message: 'test instructions?',
},
{
    type: 'input',
    name: 'username',
    message: 'What is your github username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},];

// function to write README file
function writeToFile(fileName, data) 
    {
        fileName = `README.md`;
    
        fs.writeFile(fileName, generateMarkdown(data), (err) =>
          err ? console.log(err) : console.log('Success!')
        )
    }

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => writeToFile('readme.md', answers));
}

// function call to initialize program
init();
