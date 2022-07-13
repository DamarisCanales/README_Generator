// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },

  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },

  {
    type: "input",
    name: "installation",
    message: "What command should you run to install dependencies?",
  },

  {
    type: "input",
    name: "testing",
    message: "What command should be entered to run tests?",
  },

  {
    type: "input",
    name: "repo",
    message: "What does the user need to know bout the repo?",
  },

  {
    type: "input",
    name: "github",
    message: "What does the user need to know about contributing to the repo?",
  },

  {
    type: "list",
    name: "license",
    message: "What type of license does your project have?",
    choices: ["MIT", "Apache", "GPL", "None"]
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName),data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answersObj) => {
    console.log(answersObj);
    writeToFile('README.md', generateMarkdown({...answersObj}))
  });
}

// Function call to initialize app
init();

